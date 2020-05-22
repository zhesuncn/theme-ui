import React from 'react'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const defaultContainer = styled.span

const Label = ({children, ...props}) => {
  return <ThemeComponent name="label" className="label" defaultContainer={defaultContainer} {...props}>{children}</ThemeComponent>
}

const Error = ({ children, ...props}) => {
  return <ThemeComponent name="error" className="error" defaultContainer={defaultContainer} {...props}>{children}</ThemeComponent>
}

const H1 = ({ children, ...props}) => {
  return <ThemeComponent name="h1" className="h1" defaultContainer={defaultContainer} {...props}>{children}</ThemeComponent>
}

const Tag = ({children, onClose, onClick, className = '', ...props}) => {
  return <ThemeComponent name="tag" className={'tag ' + className} {...props}>
    <span onClick={onClick}>{children}</span>
    {onClose && <span className='btn' onClick={onClose}> x</span>}
  </ThemeComponent>
}

export {
  Label,
  Error,
  H1,
  Tag
}
