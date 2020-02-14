import React, { useEffect, useState } from 'react'
import { StyledSelect } from './Styled'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import svgs, { getSrc } from '../svg'

const Selector = ({options, placeholder, onChange, children, value, getValue, getLabel, className, theme, ...props}) => {
  const [current, setCurrent] = useState(value || '')
  useEffect(() => {
    setCurrent(value)
  }, [value])

  let classN = className || ''
  if(current === '') {
    classN += ' placeholder'
  }else if(current) {
    classN += ' validate'
  }

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.selector)

  const selectChanged = (e) => {
    setCurrent(e.target.value)
    onChange && onChange(e.target.value)
  }
  return <StyledSelect className={classN}
                       onChange={selectChanged}
                       value={current}
                       styles={myTheme.styles}
                       open_icon={getSrc(myTheme.open_icon)}
                       {...props}>
        {placeholder && <option value="" disabled hidden>{placeholder}</option> }
        {Array.isArray(options)&& options.map((item, index) => {
          let value, label
          if (item instanceof Object) {
            value = getValue ? getValue(item) : item.code
            label = getLabel ? getLabel(item) : item.name
          } else {
             value = item
             label = item
           }
           return <option key={index} value={value}>{label}</option>
        })
        }
        {children}
      </StyledSelect>
}

export default Selector
