import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Input from '../src/components/Input'
import Uploader from '../src/components/Uploader'

export default { title: 'Uploader'}

export const uploader = () => <ThemeContextProvider><Uploader onFileDelete={() => {console.log('delete')}}/></ThemeContextProvider>

