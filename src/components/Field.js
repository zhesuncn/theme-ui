import React from 'react'
import { Label } from './Text'
import ThemeComponent from './ThemeComponent'

const Field = ({ label, children, direction = 'column', className = '', ...props }) => {
  return label ? <ThemeComponent
    name="field"
    direction={ direction }
    className={ 'field ' + className } { ...props } >
    <Label>{ label }</Label>
    { direction === 'column' && <div className="underline"/> }
    { children }
  </ThemeComponent> : children
}

export default Field
