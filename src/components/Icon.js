import React from 'react'
import svgs from '../svg'

const Icon = ({name, svg, ...props}) => {
  if(svg) {
    return React.createElement(svg, {...props})
  }
  if(svgs[name]) {
    return React.createElement(svgs[name], {...props})
  }
  return <img src={name} {...props}/>
}

export default Icon
