import React from 'react'
import './App.css'
import ThemeContextProvider from './ThemeContext'
import Button from './components/Button'
import Input from './components/Input'
import Uploader from './components/Uploader'

function App() {
  return (
   <ThemeContextProvider>
    <div>
      <Button className='clear top'>A button</Button>
      <Input/>
      <Uploader onFileDelete={() => {console.log('delete')}}/>
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
