import React, { useState, useEffect } from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import { getCurrentTheme } from '../../themes/util'
import { StyledDiv } from '../Styled'
import DefaultEditionContainer from './DefaultEditionContainer'
import { get } from 'lodash'

const Editable = ({className = '', value, defaultEdition = false, onChanged, onDelete, editRender, label,
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
        {label && <div className='label' style={{marginRight: '10px'}}>{label}</div>}
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
  return <StyledDiv className={'editable ' + className} styles={myTheme.styles} {...props}>
    {displayComponent}
    {editionMode}
  </StyledDiv>
}

export default Editable
