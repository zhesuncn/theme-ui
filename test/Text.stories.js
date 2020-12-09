import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import { Error, H1, Label, Tag } from '../src/components/Text'
import Button from '../src/components/Button'

export default { title: 'Text' }
const colors = [null, 'primary', 'secondary', 'success', 'error', 'warn', '#AFAFAF']

export const textStyle = () => <ThemeContextProvider>
  <div><Label>Label</Label></div>
  <div><Error>Error</Error></div>
  <div><H1>H1</H1></div>
  <div style={ { marginTop: '30px' } }>
    Tag Color properties:
  </div>
  <div>
    { colors.map(c => <Tag color={ c }>{
      c ? c : 'Default button'
    }</Tag>) }
  </div>
  <div style={ { marginTop: '20px' } }>
    { colors.map(c => <Tag color={ c } onClose={ () => {
    } }>{
      c ? c : 'Default button'
    }</Tag>) }
  </div>
</ThemeContextProvider>


