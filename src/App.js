import React from 'react'
import './App.css'
import ThemeContextProvider from './ThemeContext'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
   <ThemeContextProvider>
    <div>
      <Button className='clear top'>A button</Button>
      <Input/>
    </div>
     <style>{`
        .top {
          margin-top: 20px;
        }
     `}</style>
   </ThemeContextProvider>
  )
}

export default App;
