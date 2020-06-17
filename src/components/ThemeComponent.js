import React from 'react'
import { get } from 'lodash'
import { usePalette, useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import styled from 'styled-components'

const defaultDiv = styled.div``

const ThemeComponent = ({theme, children, name, defaultContainer, elementRef, ...props}) => {
  const themeContext = useTheme()
  const palette = usePalette()
  let myTheme = getCurrentTheme(theme, get(themeContext, name))
  const defaultC = defaultContainer ? defaultContainer : defaultDiv
  const Container = get(myTheme, 'container', defaultC)
  return <Container palette={palette} ref={elementRef} {...props}>{children}</Container>
}

export default ThemeComponent
