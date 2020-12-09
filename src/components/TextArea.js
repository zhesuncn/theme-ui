import React from 'react'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'

const Container = styled.textarea`
  border: 0;
  border-bottom: ${props => props.variable.input.border} solid ${props => props.palette.border_light};
  width:'100%';
  font-size:14px;
  text-align: left;
  padding: ${props => props.variable.padding.s} 0;
  border-radius:0;
  outline: none;
  &:focus {
    border-bottom:${props => props.variable.input.border} solid  ${props => props.palette.border_active};
  }
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.palette.black_grey_3};
    opacity: 0.5;
  }
  &.error {
    border-bottom: ${props => props.variable.input.border} solid ${props => props.palette.error};
  }
  &.validate {
    border-bottom: ${props => props.variable.input.border} solid ${props => props.palette.success};
  }
`

const TextArea = ({className, value, onValueChanged, error, label, direction, ...props}) => {
  let classN = className || ''

  classN += error ? ' error': (value ? ' validate': '')
  const valueChanged = (e) => {
    const inputValue = e.target.value
    onValueChanged && onValueChanged(inputValue)
  }
  return <Field
    label={label}
    direction={direction}
    className={classN}
  >
    <ThemeComponent
      container={Container}
      className="textarea"
      onChange={valueChanged}
      {...props}
    />
  </Field>
}

export default TextArea
