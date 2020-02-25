import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Input from '../src/components/Input'

export default { title: 'Input'}

export const input = () => <ThemeContextProvider><Input/></ThemeContextProvider>

