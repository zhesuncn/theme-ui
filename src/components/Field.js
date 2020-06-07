import React, {useState} from 'react'
import { Label } from './Text'
import ThemeComponent from './ThemeComponent'

const Field = ({ label, children, direction = 'column', className = '', onClick, closable, closed, ...props }) => {
  const [show, setShow] = useState(!closed);
  let onClickLabel
  if(closable || onClick){
    onClickLabel = (e)=> {
      closable && setShow(!show)
      onClick && onClick(e)
    }
  }
  return label ? <ThemeComponent
    name="field"
    direction={ direction }
    className={ `field ${closable ? 'closable' : ''} ${className}` } { ...props } >
    <Label onClick={ onClickLabel } style={{cursor: closable ? 'pointer' : 'default'}}>
      {closable ? (show ? <span className="down">&#x25BC;</span> : <span className="up">&#x25B2;</span>) : ''}
      { label }
    </Label>
    { direction === 'column' && <div className="underline"/> }
    {
      closable ?
        <div className={`closable-content ${show ? 'show' : 'hide'}`}>{ children }</div> : children
    }
  </ThemeComponent> : children
}

export default Field
