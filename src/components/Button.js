import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledButton, StyledLink } from './Styled'
import Icon from './Icon'

function Button(props) {
  const [loading, setLoading] = useState(false)
  const {
    disabled,
    children,
    href,
    theme,
    className,
    onClick,
    ...otherProps
  } = props
  let classN = className || ''
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.button)
  const buttonClicked = async () => {
    if(loading || disabled) {
      return;
    }
    setLoading(true)
    if(onClick) {
      await onClick()
    }
    setLoading(false)
  }

  if (href) {
    if(disabled) {
      classN += " disabled"
    }
    return <StyledLink className={classN}
                       href={disabled || loading? null : href}
                       styles={myTheme.styles}
                       onClick={buttonClicked}
                       {...otherProps}>{children}
      {myTheme.loading_icon && loading && <Icon name={myTheme.loading_icon}/>}
    </StyledLink>
  }
  return (
    <StyledButton  className={classN}
                   disabled={disabled || loading}
                   styles={myTheme.styles}
                   onClick={buttonClicked}
                   {...otherProps}>{children}
      {myTheme.loading_icon && loading && <Icon name={myTheme.loading_icon}/>}
    </StyledButton>
  )
}

export default Button