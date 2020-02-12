import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../ThemeContext'


const StyledButton = styled.button`
${props => props.styles}
`
const StyledLink =  styled.a`
${props => props.styles}
`

function Button(props) {
  const {
    disabled,
    children,
    href,
    theme,
    className,
    ...otherProps
  } = props
  let classN = className || ''
  const themeContext = useTheme()
  let myTheme = theme ? theme : themeContext.button
  if (href) {
    if(disabled) {
      classN += " disabled"
      delete otherProps.onClick
    }
    return <StyledLink className={classN} href={disabled? null : href} {...otherProps} styles={myTheme}>{children}
    </StyledLink>
  }
  return (
    <StyledButton  className={classN}  {...otherProps} disabled={disabled} styles={myTheme}>{children}
    </StyledButton>
  )
}

export default Button