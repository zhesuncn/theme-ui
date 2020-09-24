import React, { useState } from 'react'
import Field from './Field'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import { Tag } from './Text'

const defaultContainer = styled.div``

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
        name="tag_input"
        defaultContainer={ defaultContainer }
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
