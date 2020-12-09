import React, { useState } from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Input from '../src/components/Input'
import TagInput from '../src/components/TagInput'

export default { title: 'Input'}

export const input = () => {
  const [value, setValue] = useState('')
  return <ThemeContextProvider><Input value={value} onValueChanged={setValue}/></ThemeContextProvider>
}


export const labelInput = () => {
  const [value, setValue] = useState('')
  return <ThemeContextProvider><Input value={value} label='name' onValueChanged={setValue}/></ThemeContextProvider>
}

export const tagInput = () => {
  const [values, setValues] = useState([])
  return <ThemeContextProvider><TagInput label='name' values={values} onChanged={setValues}/></ThemeContextProvider>
}
