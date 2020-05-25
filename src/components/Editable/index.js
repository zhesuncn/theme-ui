import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import { getCurrentTheme } from '../../themes/util'
import DefaultEditionContainer from './DefaultEditionContainer'
import { get } from 'lodash'
import Field from '../Field'
import ThemeComponent from '../ThemeComponent'


const Editable = ({className = '', value, defaultEdition = false, onChanged, onDelete, editRender, label, direction,
                    onCancel, children, editContainerOptions, editComponent, component, theme, ...props}) => {
  const [edition, setEdition] = useState(defaultEdition)
  const [currentValue, setCurrentValue] = useState(value)
  const [current, setCurrent] = useState(value)

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.editable)
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
          onChanged && <Icon name={myTheme.edit_icon} onClick={()=> {
            reset()
            setEdition(true)
          }}/>
        }
        {
          onDelete && <Icon name={myTheme.delete_icon} onClick={() => {onDelete(value)}}/>
        }
      </div>
      {children}
      {component && React.createElement(component, {value})}
    </React.Fragment>
  }
  return <Field label={label} direction={direction} className={className}>
    <ThemeComponent name="editable"
                    theme={theme}
        {...props}>
      {displayComponent}
      {editionMode}
    </ThemeComponent>
  </Field>
}

export default Editable
