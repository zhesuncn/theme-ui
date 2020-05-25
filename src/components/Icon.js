import React from 'react'
import svgs from '../svg'

const Icon = ({name, ...props}) => {
  if(name) {
    if (typeof name === 'string' ) {
      if (svgs[name]) {
        return React.createElement(svgs[name], {...props})
      }
      return <img src={name} {...props}/>
    }
    return React.createElement(name, {...props})
  }
}

export default Icon
