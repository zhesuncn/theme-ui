import React from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledDiv, StyledSelect } from './Styled'

const Label = ({theme, children, ...props}) => {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.label)
  return <StyledDiv styles={myTheme.styles} {...props}>{children}</StyledDiv>
}

const Error = ({theme, children, ...props}) => {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.error)
  return <StyledDiv styles={myTheme.styles} {...props}>{children}</StyledDiv>
}


export {
  Label,
  Error
}
