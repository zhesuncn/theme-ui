import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Field from '../src/components/Field'

export default { title: 'Field'}

export const labelField = () => <ThemeContextProvider><Field label={'name'}>theme-ui</Field></ThemeContextProvider>


export const horizontalLabel = () => <ThemeContextProvider><Field direction="row" label={'name'}>theme-ui</Field></ThemeContextProvider>
