import React from 'react'
import { get } from 'lodash'
import { usePalette, useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'

const ThemeComponent = ({theme, children, name, defaultContainer, ...props}) => {
  const themeContext = useTheme()
  const palette = usePalette()
  let myTheme = getCurrentTheme(theme, get(themeContext, name))
  const Container = get(myTheme, 'container', defaultContainer)
  return <Container palette={palette} {...props}>{children}</Container>
}

export default ThemeComponent
