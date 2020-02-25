import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Selector from '../src/components/Selector'

export default { title: 'Selector'}

export const selector = () => (
  <ThemeContextProvider>
      <Selector
      placeholder={'Choose a language'}>
      <option value='cn'>中文</option>
      <option value='fr'>Français</option>
      <option value='en'>English</option>
    </Selector>
  </ThemeContextProvider>)

