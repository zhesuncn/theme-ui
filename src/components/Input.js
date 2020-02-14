import React, { useState } from 'react'
import { formatValue } from '../util/util'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledInput } from './Styled'


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
  let myTheme = getCurrentTheme(theme, themeContext.input)

  return <StyledInput
        className={classN}
        value={formatted}
        onChange={valueChanged}
        styles={myTheme.styles}
        {...props}
      />
}

export default Input
