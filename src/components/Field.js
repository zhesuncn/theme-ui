import React, { useState } from 'react'
import { Label } from './Text'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: ${ props => props.direction || 'column' };
  ${ props => props.direction === 'column' ? '' : 'align-items: center;' }
  
  &.field-closable > .label{
    cursor: pointer;  
  }
  
  & > .label {
    ${ props => props.direction === 'column' ? `` : `margin-right: ${props.variable.padding.s};` }
    > .field-up, > .field-down {
      font-size:.8em;
      padding-right: ${ props => props.variable.padding.xs };
    }
  }
  
  & > .field-underline {
    width: 62px;
    height: 2px;
    background-color: ${ props => props.palette.primary };
    margin-bottom: ${ props => props.variable.padding.xs };
  }
  
  > .closable-content.hide{
    display: none;
  }
`

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
    container={Container}
    direction={ direction }
    className={ `field ${closable ? 'closable' : ''} ${className}` } { ...props } >
    <Label onClick={ onClickLabel } style={{cursor: closable ? 'pointer' : 'default'}}>
      {closable ? (show ? <span className="field-down">&#x25BC;</span> : <span className="field-up">&#x25B2;</span>) : ''}
      { label }
    </Label>
    { direction === 'column' && <div className="field-underline"/> }
    {
      closable ?
        <div className={`field-closable-content ${show ? 'show' : 'hide'}`}>{ children }</div> : children
    }
  </ThemeComponent> : children
}

export default Field
