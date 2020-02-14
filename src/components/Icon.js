import React from 'react'
import svgs from '../svg'

const Icon = ({name, ...props}) => {
  console.log(svgs[name])
  if(svgs[name]) {
    return React.createElement(svgs[name], {...props})
  }
  return <img src={name} {...props}/>
}

export default Icon