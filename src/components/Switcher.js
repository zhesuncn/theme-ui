import React, { useEffect, useState } from 'react'
import ThemeComponent from './ThemeComponent'


const Switcher = ({children, value, label, onChange, style, ...props }) => {
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
