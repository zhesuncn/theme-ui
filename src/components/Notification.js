import React, { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const Container = styled.div`
  border: ${props =>props.variable.border} solid ${props =>props.palette.primary};
  border-radius: ${props =>props.variable.radius};
  padding: ${props =>props.variable.padding.xs} ${props =>props.variable.padding.m};
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
    outline: none;
    width: 12px;
  }
  svg {
    cursor: pointer;
    outline: none;
    width: 12px;
  }
  &.info{
    border-color: ${props => props.palette.success};
    color: ${props => props.palette.success};
  }
  &.error{
    border-color: error;
    color: error;
  }
`

const Notification = ({children, type = 'info', autohide = 5, show = true, onHide, ...props}) =>{
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
  const theme = useTheme()

  return isShow ? <ThemeComponent
    container={Container}
    className={classN} {...props}>
    {children}
    {theme.images.close_icon && <Icon name={theme.images.close_icon} onClick={hide}/>}
  </ThemeComponent>: null
}

export default Notification
