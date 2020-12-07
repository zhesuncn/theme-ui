import React from 'react'
import { useTheme } from '../ThemeContext'

const ThemeComponent = ({children, container, elementRef, color, ...props}) => {
  const theme = useTheme()
  const Container = container || <div/>
  if(color) {
    props.color = theme.palette[color] || color
  }
  return <Container palette={theme.palette} variable={theme.variable} ref={elementRef} {...props}>{children}</Container>
}

export default ThemeComponent
