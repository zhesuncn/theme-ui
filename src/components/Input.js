import React, { useEffect, useState } from 'react'
import { formatValue } from '../util/util'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'

const defaultContainer = styled.input

const Input = ({format, className, value, onValueChanged, error, label, direction, ...props}) => {
  const [current, setCurrent] = useState(value)
  const [formatted, setFormatted] = useState(format ? formatValue(value, format).formatted: value)
  let classN = className || ''
  useEffect(() => {
    setCurrent(value)
    setFormatted(format ? formatValue(value, format).formatted: value)
  }, [value])

  classN += error ? ' error': (current ? ' validate': '')
  const valueChanged = (e) => {
    const inputValue = e.target.value
    const result = format ? formatValue(inputValue, format) : { formatted: inputValue, raw: inputValue }
    setCurrent(result.raw)
    setFormatted(result.formatted)
    onValueChanged && onValueChanged(result.formatted, result.raw)
  }
  return <Field
        label={label}
        direction={direction}
        className={classN}
      >
      <ThemeComponent
        name="input"
        defaultContainer={defaultContainer}
        value={formatted}
        onChange={valueChanged}
        {...props}
      />
  </Field>
}

export default Input
