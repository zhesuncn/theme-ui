import React, { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { getSrc } from '../svg'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'
import Field from './Field'

const defaultContainer = styled.select``

const Selector = ({ options, placeholder, onChange, children, value, getValue, getLabel, className, theme, label, direction, canClean, ...props }) => {
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

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.selector)
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
      theme={ theme }
      name="selector"
      defaultContainer={ defaultContainer }
      onChange={ selectChanged }
      value={ current }
      open_icon={ getSrc(myTheme.open_icon) }
      { ...props }>
      { placeholder && <option value="" disabled={!canClean} hidden>{ placeholder }</option> }
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
