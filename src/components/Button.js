import React, { useState } from 'react'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'

function Button({
                  disabled,
                  children,
                  href,
                  theme,
                  className= '',
                  onClick,
                  ...props
                }) {
  const [loading, setLoading] = useState(false)
  let classN = 'button ' +  className
  const themeContext = useTheme()
  const myTheme = getCurrentTheme(theme, themeContext.button)
  const buttonClicked = async () => {
    if (loading || disabled) {
      return
    }
    setLoading(true)
    if (onClick) {
      const result = onClick()
      if (result instanceof Promise) {
        return result.then(resp => {
          if(!resp) {
            setLoading(false)
          }
        })
      }
    }
    setLoading(false)
  }

  if (href) {
    if (disabled) {
      classN += ' disabled'
    }
  }
  return <ThemeComponent
    name='button'
    className={ classN }
    href={ disabled || loading ? null : href }
    onClick={ buttonClicked }
    { ...props }>
    { children }
    { myTheme.loading_icon && loading && <Icon name={ myTheme.loading_icon }/> }
  </ThemeComponent>

}

export default Button
