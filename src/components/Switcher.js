import React, { useEffect, useState } from 'react'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  .switch-title {
    margin-right: ${props => props.variable.padding.s};
  }
  label {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
    vertical-align: middle;
    margin-right: ${props => props.variable.padding.s};
  }

  label .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${props => props.palette.white};
      -webkit-transition: 0.4s;
      transition: 0.4s;
  }

  label .slider:before {
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 3px;
      background-color: ${props => props.palette.white};
      -webkit-transition: 0.4s;
      transition: 0.4s;
  }

  label[data-value='true'] .slider {
      background-color: ${props => props.colorTrue ? props.colorTrue : props.palette.success};
  }
  
  label[data-value='false'] .slider {
      background-color: ${props => props.colorFalse ? props.colorFalse : props.palette.border_active};
  }

  label[data-value='true'] .slider:before {
      -webkit-transform: translateX(25px);
      -ms-transform: translateX(25px);
      transform: translateX(25px);
  }

  label .slider.round {
      border-radius: 26px;
  }

  label .slider.round:before {
      border-radius: 50%;
  }
`

const Switcher = ({children, value, getLabel, onChange, className='', readonly=false, ...props }) => {
  const [current, setCurrent] = useState(value || false)
  useEffect(() => {
    setCurrent(value)
  }, [value])

  const onClick = () => {
    if(readonly === false){
      setCurrent(!current)
      onChange && onChange(!current)
    }
  }
  return <ThemeComponent
    container={Container}
    className={'switcher ' + className}
    {...props}>
    {children && <span className='switch-title'>{children}</span>}
    <label
        data-print="hide"
        data-value={'' + !!current}
        onClick={onClick}
    >
        <span className="slider round" />
    </label>
    {getLabel &&  <span>{getLabel(current)}</span>}
  </ThemeComponent>
}

export default Switcher
