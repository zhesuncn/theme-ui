import React, { useState } from 'react'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'
import { useTheme } from '../index'

const Container = styled.a`
    display: inline-flex;
    border: ${props => props.variable.button.border} solid ${props => props.color || props.palette.primary};
    border-radius: ${props => props.variable.radius};
    padding: ${props => props.variable.padding.s} ${props => props.variable.padding.m};
    height: ${props => props.variable.button.height};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background: ${props => props.color || props.palette.primary};
    color: ${props => props.palette.white};
    outline: none;
    .button-icon {
      position: absolute;
      fill: ${props => props.palette.white};
    }
    &:hover{
     opacity: 0.8;
    }
    &.disabled, &:disabled{
      opacity: 0.2;
    }
    &.clear {
      height: auto;
      padding: ${props => props.variable.padding.s} 0;
      border: none;
      background-color: transparent;
      border-radius: 0;
      align-items: center;
      color: ${props => props.color || props.palette.primary};
    }
    &.clear .button-icon{
      fill: ${props => props.color || props.palette.primary};
    }
    &.invert {
      background: transparent;
      color: ${props => props.color || props.palette.primary};
      border-color: ${props =>  props.color || props.palette.primary};
      .button-icon{
        fill: ${props => props.color || props.palette.primary};
      }
    }
  `

function Button({
                  disabled,
                  children,
                  href,
                  className= '',
                  onClick,
                  ...props
                }) {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  let classN = 'button ' +  className
  const buttonClicked = async () => {
    if (loading || disabled) {
      return
    }
    setLoading(true)
    if (onClick) {
      const result = onClick()
      if (result instanceof Promise) {
        return result.then(resp => {
          if(!resp) {
            setLoading(false)
          }
        })
      }
    }
    setLoading(false)
  }

  if (disabled) {
    classN += ' disabled'
  }
  return <ThemeComponent
    container={Container}
    className={ classN }
    href={ disabled || loading ? null : href }
    onClick={ buttonClicked }
    { ...props }>
    { children }
    { theme.images.loading_icon && loading && <Icon className="button-icon" name={ theme.images.loading_icon }/> }
  </ThemeComponent>
}

export default Button
