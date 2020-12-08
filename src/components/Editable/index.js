import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import DefaultEditionContainer from './DefaultEditionContainer'
import { get } from 'lodash'
import Field from '../Field'
import ThemeComponent from '../ThemeComponent'
import styled from 'styled-components'

const Container = styled.div`
 .btns {
    display: inline-flex;
  }
  .btns svg, .btns img{
    margin-right: 10px;
    width: 16px;
  }
`
const Editable = ({className = '', value, defaultEdition = false, onChanged, onDelete, editRender, label, direction,
                    onCancel, children, editContainerOptions, editComponent, component, ...props}) => {
  const [edition, setEdition] = useState(defaultEdition)
  const [currentValue, setCurrentValue] = useState(value)
  const [current, setCurrent] = useState(value)

  const theme = useTheme()
  const reset = () => {
    if(value) { //Set props.value to currentValue
      setCurrentValue(value)
    }
    setCurrent(currentValue)
  }
  useEffect(() => {
    reset()
  }, [value])

  let editionMode = null

  if(edition) {
    const editProps = {value: current, onChanged: (v) => {
        console.log(v)
        setCurrent(v)
      }}
    const editContent = editComponent ? React.createElement(editComponent, editProps) : (editRender ? editRender(editProps) : null)
    const EditionC = editContainerOptions && editContainerOptions.component ? editContainerOptions.component : DefaultEditionContainer
    const onEditionConfirm = () => {
      setCurrentValue(current)
      onChanged && onChanged(current)
      setEdition(false)
    }
    const onEditionCancel = () => {
      reset()
      setEdition(false)
      onCancel && onCancel()
    }
    const containerProps = get(editContainerOptions, 'props', {})
    editionMode =  <EditionC onConfirm={onEditionConfirm} onCancel={onEditionCancel} label={label} {...containerProps}>
      {editContent}
    </EditionC>
  }
  let displayComponent = null
  if(!edition) {
    displayComponent = <React.Fragment>
      <div className='btns'>
        {
          onChanged && <Icon name={theme.images.edit_icon} onClick={()=> {
            reset()
            setEdition(true)
          }}/>
        }
        {
          onDelete && <Icon name={theme.images.delete_icon} onClick={() => {onDelete(value)}}/>
        }
      </div>
      {children}
      {component && React.createElement(component, {value})}
    </React.Fragment>
  }
  return <Field label={label} direction={direction} className={className}>
    <ThemeComponent className="editable"
                    container={Container}
        {...props}>
      {displayComponent}
      {editionMode}
    </ThemeComponent>
  </Field>
}

export default Editable
