import React, { useState } from 'react'
import Field from './Field'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import { Tag } from './Text'

const defaultContainer = styled.div `
  border: 0;
  border-bottom: ${props => props.variable.input.border} solid ${props => props.palette.border_light};
  width:'100%';
  font-size:14px;
  text-align: left;
  padding: ${props => props.variable.padding.xs} 0;
  height: 26px;
  border-radius:0;
  outline: none;
  display: flex;
  .tag {
    margin-right: 5px;
  }
  &:focus {
    border-bottom: 3px solid  ${props => props.palette.border_active};
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
  input {
    border: 0;
    background: transparent;
    outline: none;
    flex: 1;
  }
`

export default function TagInput
  ({
     label,
     error,
     className,
     direction,
     values,
     onChanged,
     onInputChanged,
     onInputBlur,
     onTagDelete,
     onTagClick,
     checkEnd,
     ...props
   }) {
  const [current, setCurrent] = useState('')
  let classN = className || ''
  classN += error ? ' error' : (current ? ' validate' : '')

  const deleteTag = (v, index) => {
    if (onChanged) {
      const list = [...values]
      list.splice(index, 1)
      onChanged && onChanged(list)
    }
    onTagDelete && onTagDelete(v)
  }
  const inputChanged = (ev) => {
    const raw = ev.target.value
    onInputChanged && onInputChanged(raw)
    if (raw.trim()) {
      if (checkToAddTag(raw)) {
        let list = values ? [...values, raw.trim()] : [raw.trim()]
        onChanged && onChanged(list)
        console.log(list)
        setCurrent('')
      } else {
        setCurrent(raw)
      }
    }
  }

  const onKeyPress = (ev) => {

  }

  const inputFocus = (ev) => {
  }

  const checkToAddTag = (text) => {
    if(checkEnd) {
      return checkEnd(text)
    }
    return text.match(/.*\s$/g)
  }

  const inputBlur = () => {
    if(current) {
      let list = values ? [...values, current] : [current]
      onChanged && onChanged(list)
      console.log(list)
      setCurrent('')
    }
    onInputBlur && onInputBlur()
  }
  return (
    <Field
      label={ label }
      direction={ direction }
      className={ classN }
    >
      <ThemeComponent
        className="tag-input"
        container={ defaultContainer }
        { ...props }
      >
        { values && values.length > 0 && <div className={ 'tags' }>
          { values.map((v, index) => {
            if (index !== values) {
              return <Tag key={ index }
                          onClick={() => onTagClick(v, index)}
                          onClose={ () => deleteTag(v, index) }>
                { v }
              </Tag>
            }
            return null
          }) }
        </div> }
        <input value={ current } onChange={ inputChanged } onBlur={inputBlur}/>
      </ThemeComponent>
    </Field>
  )
}
