import React from 'react'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const defaultContainer = styled.span

const Label = ({children, ...props}) => {
  return <ThemeComponent name="label" defaultContainer={defaultContainer} {...props}>{children}</ThemeComponent>
}

const Error = ({ children, ...props}) => {
  return <ThemeComponent name="error" defaultContainer={defaultContainer} {...props}>{children}</ThemeComponent>
}


export {
  Label,
  Error
}
