import ThemeContextProvider from '../src/ThemeContext'
import React from 'react'
import svgs from '../src/svg'
import Icon from '../src/components/Icon'

export default { title: 'SVG Icons'}

export const icons = () => {
  return   <ThemeContextProvider>
    <div>
      Color properties:
    </div>
    <div style={ { marginTop: "10px" } }>
      {
        Object.keys(svgs).map(k =>
        <Icon name={k} style={{height: "30px", marginRight: "10px"}}/>)
      }
    </div>
    <div style={ { marginTop: "30px" } }>
      Set style color
    </div>
    <div style={ { marginTop: "10px" } }>
      {
        Object.keys(svgs).map(k =>
          <Icon name={k} style={{color: "#00b59b", height: "30px", marginRight: "10px"}}/>)
      }
    </div>
  </ThemeContextProvider>
  }
