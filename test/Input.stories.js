import React, { useState } from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Input from '../src/components/Input'
import TagInput from '../src/components/TagInput'

export default { title: 'Input'}

export const input = () => <ThemeContextProvider><Input/></ThemeContextProvider>


export const labelInput = () => <ThemeContextProvider><Input label='name'/></ThemeContextProvider>

export const tagInput = () => {
  const [values, setValues] = useState([])
  return <ThemeContextProvider><TagInput label='name' values={values} onChanged={setValues}/></ThemeContextProvider>
}
