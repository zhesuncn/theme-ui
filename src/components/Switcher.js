import React, { useEffect, useState } from 'react'
import { StyledDiv } from './Styled'
import { getCurrentTheme } from '../themes/util'
import { useTheme } from '../ThemeContext'


const Switcher = ({children, value, label, onChange, style, theme, ...props }) => {
  const [current, setCurrent] = useState(value || false)
  useEffect(() => {
    setCurrent(value)
  }, [value])

  const onClick = () => {
    setCurrent(!current)
    onChange && onChange(!current)
  }
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.switcher)

  return <StyledDiv {...props} styles={myTheme.styles}>
    {children && <span className='title'>{children}</span>}
    <label
        data-print="hide"
        data-value={'' + !!current}
        onClick={onClick}
    >
        <span className="slider round" />
    </label>
    {label &&  <span>{label(current)}</span>}
  </StyledDiv>
}

export default Switcher