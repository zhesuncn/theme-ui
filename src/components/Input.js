import React, { useEffect, useState } from 'react'
import { formatValue } from '../util/util'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledInput } from './Styled'


const Input = ({format, className, value, onValueChanged, error, theme, ...props}) => {
  const [current, setCurrent] = useState(value)
  const [formatted, setFormatted] = useState(format ? formatValue(value, format): value)
  let classN = className || ''
  useEffect(() => {
    setCurrent(value)
    setFormatted(format ? formatValue(value, format): value)
  }, [value])

  classN += error ? ' error': (current ? ' validate': '')
  const valueChanged = (e) => {
    const inputValue = e.target.value
    const result = format ? formatValue(inputValue, format) : { formatted: inputValue, raw: inputValue }
    setCurrent(result.raw)
    setFormatted(result.formatted)
    onValueChanged && onValueChanged(result.formatted, result.raw)
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
