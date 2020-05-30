import React, { useEffect, useState } from 'react'
import { formatValue } from '../util/util'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'

const defaultContainer = styled.textarea``

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
      name="textarea"
      defaultContainer={defaultContainer}
      onChange={valueChanged}
      {...props}
    />
  </Field>
}

export default TextArea
