import React, { useContext } from 'react'
import { defaultTheme } from './themes'

export const ThemeContext = React.createContext({})
function ThemeContextProvider (props) {
  const config = props.config ? props.config : defaultTheme
  const myContext = config
  return <ThemeContext.Provider value={myContext}>
    { props.children }
  </ThemeContext.Provider>
}

const useTheme = () => {
  return useContext(ThemeContext)
}
const usePalette = () => {
  return useContext(ThemeContext).palette
}

export default ThemeContextProvider
export {useTheme, usePalette}
