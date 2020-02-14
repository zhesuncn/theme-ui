import React from 'react'
import './App.css'
import ThemeContextProvider from './ThemeContext'
import Button from './components/Button'
import Input from './components/Input'
import Uploader from './components/Uploader'
import HtmlEditor from './components/HtmlEditor'
import Switcher from './components/Switcher'
import Selector from './components/Selector'
import Notification from './components/Notification'

function App() {
  return (
   <ThemeContextProvider>
    <div>
      <Notification>Some thing is successful</Notification>
      <Notification type='error' autohide={false}>Some thing is wrong !!!!!</Notification>
      <Button>A button</Button>
      <Button className='clear top'>clear button</Button>
      <Input/>
      <Uploader onFileDelete={() => {console.log('delete')}}/>
      <HtmlEditor/>
      <Switcher>Open</Switcher>
      <Selector
        placeholder={'Choose a language'}>
        <option value='cn'>中文</option>
        <option value='fr'>Français</option>
        <option value='en'>English</option>
      </Selector>
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
