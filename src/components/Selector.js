import React, { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { getSrc } from '../svg'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'

const Container = styled.select` 
  padding:  ${props => props.variable.padding.s} ${props => props.variable.padding.m} ${props => props.variable.padding.s} 0;
  border: 0;
  border-radius: 0;
  border-bottom: ${props => props.variable.input_border} solid ${props => props.palette.border_light};
  background-color: ${props => props.palette.white};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-position: right 5px bottom 16px;
  background-repeat: no-repeat;
  font-size:14px;
  color: ${props => props.palette.black_grey};
  white-space: normal;
  outline: none;
  &.validate {
    border-bottom: 3px solid ${props => props.palette.success};
  }
  &.placeholder {
    color: ${props => props.palette.black_grey_3};
  }
  &:focus {
    border-bottom: 3px solid  ${props => props.palette.border_active};
  }
  &::-ms-expand {
    display: none;
  }
`

const Selector = ({ options, placeholder, onChange, children, value, getValue, getLabel, className, label, direction, canClean, ...props }) => {
  const [current, setCurrent] = useState(value || '')
  useEffect(() => {
    setCurrent(value)
  }, [value])

  let classN = className || ''
  if (current === '') {
    classN += ' placeholder'
  } else if (current) {
    classN += ' validate'
  }

  const theme = useTheme()
  const selectChanged = (e) => {
    setCurrent(e.target.value)
    onChange && onChange(e.target.value)
  }
  return <Field
    label={ label }
    direction={ direction }
    className={ classN }
  >
    <ThemeComponent
      className="selector"
      container={ Container }
      onChange={ selectChanged }
      value={ current }
      open_icon={ getSrc(theme.images.open_icon) }
      { ...props }>
      { placeholder && <option value="" hidden={!canClean} >{ placeholder }</option> }
      { Array.isArray(options) && options.map((item, index) => {
        let value, label
        if (item instanceof Object) {
          value = getValue ? getValue(item) : item.code
          label = getLabel ? getLabel(item) : item.name
        } else {
          value = item
          label = item
        }
        return <option key={ index } value={ value }>{ label }</option>
      })
      }
      { children }
    </ThemeComponent>
  </Field>
}

export default Selector
