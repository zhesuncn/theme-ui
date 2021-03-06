import React from 'react'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'
import Icon from './Icon'

const LabelContainer = styled.span`
  font-weight: bold;
`
const Label = ({ children, className = '', ...props }) => {
  return <ThemeComponent className={ className + ' label' }
                         container={ LabelContainer } { ...props }>{ children }</ThemeComponent>
}

const ErrorContainer = styled.span`
  color: ${props => props.palette.error};
`
const Error = ({ children, className = '', ...props }) => {
  return <ThemeComponent className={ className + ' error' }
                         container={ ErrorContainer } { ...props }>{ children }</ThemeComponent>
}

const H1Container = styled.h1`
  font-size: 24px;
  font-weight: bold
`
const H1 = ({ children, className = '', ...props }) => {
  return <ThemeComponent className={ className + ' h1' }
                         container={ H1Container } { ...props }>{ children }</ThemeComponent>
}

const H2Container = styled.h2`
  font-size: 22px;
  font-weight: bold
`
const H2 = ({ children, className = '', ...props }) => {
  return <ThemeComponent className={ className + ' h2' }
                         container={ H2Container } { ...props }>{ children }</ThemeComponent>
}

const TagContainer =  styled.div`
  font-size: 14px;
  background: ${props => props.color || props.palette.grey_light};
  color: ${props =>props.palette.inverse};
  padding: ${props => props.variable.padding.xs} ${props => props.variable.padding.s};
  display: inline-block;
  border-radius: ${props => props.variable.radius};
  > .tag-btn{
    margin-left: ${props => props.variable.padding.xs};
    cursor: pointer;
    height: 10px;
    width:10px;
    color: ${props =>props.palette.inverse};
  }
  > .tag-btn:hover{
    opacity: 0.5;
  }
`
const Tag = ({ children, onClose, onClick, className = '', ...props }) => {
  return <ThemeComponent className={ className + ' tag' } container={TagContainer} { ...props }>
    <span onClick={ onClick }>{ children }</span>
    { onClose && <Icon className='tag-btn' onClick={ onClose } name="close"/> }
  </ThemeComponent>
}

export {
  Label,
  Error,
  H1,
  H2,
  Tag
}
