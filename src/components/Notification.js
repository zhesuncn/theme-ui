import React, { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledDiv } from './Styled'
import { getSrc } from '../svg'

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

  return isShow ? <StyledDiv className={classN} styles={myTheme.styles} {...props}>
    {children}
    {myTheme.close_icon && <img src={getSrc(myTheme.close_icon)} onClick={hide}/>}
  </StyledDiv>: null
}

export default Notification