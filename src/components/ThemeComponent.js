import React from 'react'
import { useTheme } from '../ThemeContext'
import styled from 'styled-components'

const defaultContainer = styled.div

const ThemeComponent = ({children, container, elementRef, color, ...props}) => {
  const theme = useTheme()
  const Container = container || defaultContainer
  if(color) {
    props.color = theme.palette[color] || color
  }
  return <Container palette={theme.palette} variable={theme.variable} ref={elementRef} {...props}>{children}</Container>
}

export default ThemeComponent
