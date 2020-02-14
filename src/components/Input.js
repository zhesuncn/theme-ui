import React, { useState } from 'react'
import styled from 'styled-components'
import { formatValue } from '../util/util'
import { useTheme } from '../ThemeContext'

const StyledInput = styled.input`
${props => props.styles}
`

const Input = ({format, className, value, onValueChanged, error, theme, ...props}) => {
  const [current, setCurrent] = useState('')
  let classN = className || ''
  const myValue = value ? value : current
  classN += error ? ' error': (myValue ? ' validate': '')
  const { formatted }  = format ? formatValue(myValue, format) : { formatted: myValue }
  const valueChanged = (e) => {
    const inputValue = e.target.value
    const { formatted, raw } = format ? formatValue(inputValue, format) : { formatted: myValue, raw: myValue }
    setCurrent(raw)
    onValueChanged && onValueChanged(formatted, raw)
  }
  const themeContext = useTheme()
  let myTheme = theme ? theme : themeContext.input

  return <StyledInput
        className={classN}
        value={formatted}
        onChange={valueChanged}
        styles={myTheme}
        {...props}
      />
}

export default Input
