import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import { Error, H1, Label, Tag } from '../src/components/Text'

export default { title: 'Text' }

export const textStyle = () => <ThemeContextProvider>
  <div><Label>Label</Label></div>
  <div><Error>Error</Error></div>
  <div><H1>H1</H1></div>
  <div><Tag>Tag</Tag></div>
  <div style={{marginTop: "20px"}}><Tag onClose={()=>{}}>Tag closable</Tag></div>
</ThemeContextProvider>


