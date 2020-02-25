import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import HtmlEditor from '../src/components/HtmlEditor'

export default { title: 'HtmlEditor'}

export const input = () => <ThemeContextProvider><HtmlEditor/></ThemeContextProvider>

