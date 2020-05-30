import React, { useEffect, useState } from 'react'
import ThemeComponent from './ThemeComponent'


const Switcher = ({children, value, getLabel, onChange, className='', ...props }) => {
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
    className={'switcher ' + className}
    {...props}>
    {children && <span className='title'>{children}</span>}
    <label
        data-print="hide"
        data-value={'' + !!current}
        onClick={onClick}
    >
        <span className="slider round" />
    </label>
    {getLabel &&  <span>{getLabel(current)}</span>}
  </ThemeComponent>
}

export default Switcher
