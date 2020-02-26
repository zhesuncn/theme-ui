import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import EditableInput from '../src/components/EditableInput'

export default { title: 'EditableInput'}


export const input = () => <ThemeContextProvider><EditableInput /></ThemeContextProvider>
