import React, { useEffect, useState } from 'react'
import { getCurrentTheme } from '../themes/util'
import { useTheme } from '../ThemeContext'
import styled from 'styled-components'
import ThemeComponent from './ThemeComponent'

const defaultContainer = styled.div

const Switcher = ({children, value, label, onChange, style, theme, ...props }) => {
  const [current, setCurrent] = useState(value || false)
  useEffect(() => {
    setCurrent(value)
  }, [value])

  const onClick = () => {
    setCurrent(!current)
    onChange && onChange(!current)
  }
  return <ThemeComponent
    name="switcher"
    defaultContainer={defaultContainer}
    {...props}>
    {children && <span className='title'>{children}</span>}
    <label
        data-print="hide"
        data-value={'' + !!current}
        onClick={onClick}
    >
        <span className="slider round" />
    </label>
    {label &&  <span>{label(current)}</span>}
  </ThemeComponent>
}

export default Switcher
