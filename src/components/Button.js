import React from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledButton, StyledLink } from './Styled'


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
  let myTheme = getCurrentTheme(theme, themeContext.button)
  if (href) {
    if(disabled) {
      classN += " disabled"
      delete otherProps.onClick
    }
    return <StyledLink className={classN} href={disabled? null : href} {...otherProps} styles={myTheme.styles}>{children}
    </StyledLink>
  }
  return (
    <StyledButton  className={classN}  {...otherProps} disabled={disabled} styles={myTheme.styles}>{children}
    </StyledButton>
  )
}

export default Button