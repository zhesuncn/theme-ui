import React from 'react'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const defaultContainer = styled.span

const Label = ({ children, className = '', ...props }) => {
  return <ThemeComponent name="label" className={ className + ' label' }
                         defaultContainer={ defaultContainer } { ...props }>{ children }</ThemeComponent>
}

const Error = ({ children, className = '', ...props }) => {
  return <ThemeComponent name="error" className={ className + 'error' }
                         defaultContainer={ defaultContainer } { ...props }>{ children }</ThemeComponent>
}

const H1 = ({ children, className = '', ...props }) => {
  return <ThemeComponent name="h1" className={ className + ' h1' }
                         defaultContainer={ defaultContainer } { ...props }>{ children }</ThemeComponent>
}

const Tag = ({ children, onClose, onClick, className = '', ...props }) => {
  return <ThemeComponent name="tag" className={ className + ' tag' } { ...props }>
    <span onClick={ onClick }>{ children }</span>
    { onClose && <span className='btn' onClick={ onClose }> x</span> }
  </ThemeComponent>
}

export {
  Label,
  Error,
  H1,
  Tag
}
