import styled from 'styled-components'
import React from 'react'
import { Label, SubLabel } from './Text'
import ThemeComponent from './ThemeComponent'

const defaultContainer = styled.div

const Field = ({ label, children, direction = 'column', className = '', ...props }) => {
  return label ? <ThemeComponent
    name="field"
    defaultContainer={ defaultContainer }
    direction={ direction }
    className={ 'field ' + className } { ...props } >
    <Label className={ 'label' }>{ label }</Label>
    { direction === 'column' && <div className="underline"/> }
    { children }
  </ThemeComponent> : children
}

export default Field
