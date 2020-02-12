import React from 'react'
import './App.css'
import ThemeContextProvider from './ThemeContext'
import Button from './components/Button'

function App() {
  return (
   <ThemeContextProvider>
    <div>
      <Button className='clear top'>A button</Button>
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
