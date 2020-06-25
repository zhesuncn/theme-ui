import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'
import { getNextCursorPosition, setSelection } from '../util/util'

const defaultContainer = styled.input``

const Input = ({className, value, onValueChanged, error, label, direction, formatter, suffix, ...props}) => {
  const [raw, setRaw] = useState('')
  const [current, setCurrent] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputEl = useRef(null)

  let classN = className || ''

  useEffect(() => {
    if(value || value === '') {
      setRaw(value)
      const currentValue = formatter ? formatter.format(value) : value
      setCurrent(currentValue)
    }
  }, [value, formatter])

  useEffect(() => {
    if(inputEl && formatter) {
      setSelection(inputEl, cursor)
    }
  }, [inputEl, cursor, formatter, current])


  classN += error ? ' error': (current ? ' validate': '')

  const valueChanged = (ev) => {
    let rawValue = ev.target.value
    if(formatter) {
      let endPos = ev.target.selectionEnd
      let currentValue = ev.target.value
      rawValue = formatter.getRawValue(currentValue)
      endPos = getNextCursorPosition(endPos, current, currentValue, formatter.delimiter, formatter.delimiters);
      ev.target.value = formatter.format(rawValue)
      setCursor(endPos)
    }

    if(rawValue !== raw) {
      setRaw(rawValue)
      onValueChanged && onValueChanged(rawValue)
    }
  }

  return <Field
        label={label}
        direction={direction}
        className={classN}
      >
      <ThemeComponent
        elementRef={inputEl}
        name="input"
        defaultContainer={defaultContainer}
        value={current}
        onChange={valueChanged}
        {...props}
      />
    {suffix && <span className={'input-suffix'}>{suffix}</span>}
  </Field>
}

export default Input
