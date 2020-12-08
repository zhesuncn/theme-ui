import Button from '../src/components/Button'
import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'

export default { title: 'Button'}

const onClickPromise = () => {return new Promise((resolve, reject) => {
  setTimeout(() => {resolve()}, 2000)
})}

export const button = () => <ThemeContextProvider><Button onClick={onClickPromise}>A button</Button></ThemeContextProvider>

export const clearButton = () => <ThemeContextProvider><Button className='clear top' onClick={onClickPromise}>clear button</Button></ThemeContextProvider>
