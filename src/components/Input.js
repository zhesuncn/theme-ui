import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'
import { getNextCursorPosition, setSelection } from '../util/util'

const Container = styled.input`
  border: 0;
  border-bottom: ${props => props.variable.input_border} solid ${props => props.palette.border_light};
  width:'100%';
  font-size:14px;
  text-align: left;
  padding: ${props => props.variable.padding.s} 0;
  border-radius:0;
  outline: none;
  &:focus {
    border-bottom:${props => props.variable.input_border} solid  ${props => props.palette.border_active};
  }
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.palette.black_grey_3};
    opacity: 0.5;
  }
  &.error {
    border-bottom: 3px solid ${props => props.palette.error};
  }
  &.validate {
    border-bottom: 3px solid ${props => props.palette.success};
  }
`

const Input = ({className, value, onValueChanged, error, label, direction, formatter, prefix, suffix, ...props}) => {
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
    if(inputEl && (formatter || cursor > -1)) {
      setSelection(inputEl, cursor)
    }
  }, [inputEl, cursor, formatter, current])


  classN += error ? ' error': (current ? ' validate': '')

  const valueChanged = (ev) => {
    const cursor = ev.target.selectionStart;          
    let rawValue = ev.target.value
    if(formatter) {
      let endPos = ev.target.selectionEnd
      let currentValue = ev.target.value
      rawValue = formatter.getRawValue(currentValue)
      endPos = getNextCursorPosition(endPos, current, currentValue, formatter.delimiter, formatter.delimiters);
      ev.target.value = formatter.format(rawValue)
      setCursor(endPos)
    } else {
      setCursor(Math.min(cursor, (rawValue||'').length))
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
    {prefix && <span className={'input-prefix'}>{prefix}</span>}
      <ThemeComponent
        container={Container}
        className={"input"}
        elementRef={inputEl}
        value={current}
        onChange={valueChanged}
        {...props}
      />
    {suffix && <span className={'input-suffix'}>{suffix}</span>}
  </Field>
}

export default Input
