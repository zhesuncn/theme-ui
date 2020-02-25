import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Switcher from '../src/components/Switcher'

export default { title: 'Switcher'}

export const switcher = () => <ThemeContextProvider><Switcher>Open</Switcher></ThemeContextProvider>

