import React, { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const defaultContainer = styled.div

const Notification = ({children, type = 'info', autohide = 5, show = true, onHide, theme, ...props}) =>{
  const [isShow, setIsShow] = useState(show)

  useEffect(() => {
    setIsShow(show)
    if(autohide && show) {
      setTimeout(() => {
        hide()
      }, autohide * 1000)
    }
  }, [show])
  const classN = 'notification ' + type
  const hide = () => {
    setIsShow(false)
    onHide && onHide()
  }
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.notification)

  return isShow ? <ThemeComponent
    name="notification"
    defaultContainer={defaultContainer}
    className={classN} {...props}>
    {children}
    {myTheme.close_icon && <Icon name={myTheme.close_icon} onClick={hide}/>}
  </ThemeComponent>: null
}

export default Notification
