import React, { useContext, useEffect, useState } from 'react'
import { compilePalette } from './themes/util'
import { defaultTheme } from './themes'

export const ThemeContext = React.createContext({})
function ThemeContextProvider (props) {
  const [theme, setTheme] = useState({})
  const config = props.config ? props.config : defaultTheme
  const myContext = {
    theme: config.component,
    palette: config.palette
  }

  // useEffect(() => {
  //   const config = props.config ? props.config : defaultTheme
  //   const t = {}
  //   Object.keys(config.component).forEach(key => {
  //     t[key] = compilePalette(config.palette, config.component[key])
  //   })
  //   setTheme(t)
  // }, [props.config])
  return <ThemeContext.Provider value={myContext}>
    { props.children }
  </ThemeContext.Provider>
}

const useTheme = () => {
  return useContext(ThemeContext).theme
}
const usePalette = () => {
  return useContext(ThemeContext).palette
}

export default ThemeContextProvider
export {useTheme, usePalette}
