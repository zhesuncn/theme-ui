import React, { useState } from 'react'
import Modal from 'react-modal'
import { get } from 'lodash'
import TextArea from './TextArea'
import ThemeComponent from './ThemeComponent'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import Button from './Button'

export default function Popup({ isOpen, onClose, children, styles, theme, ...props }) {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, get(themeContext, 'popup'))
  const style = myTheme.style
  return <Modal
    isOpen={ isOpen }
    style={ style }
    bodyOpenClassName={ 'fix-modal' }
    className="popup"
    onRequestClose={ onClose }
    {...props}
  >
    { children }
  </Modal>
}


export function Prompt({ title, onConfirm, onCancel, confirmTxt, cancelTxt, disableConfirm, theme, ...props }) {
  const [msg, setMsg] = useState('')
  return <Popup { ...props } theme={theme}>
    <ThemeComponent theme={theme} name='prompt'>
      <div className='title'>{ title }</div>
      <TextArea
        value={ msg }
        onValueChange={ setMsg }
        rows={ 20 }
      />
      <div className="actions">
        <Button onClick={ () => onConfirm && onConfirm(msg) } theme={theme}
                disabled={ disableConfirm }>{ confirmTxt }
        </Button>
        { onCancel &&
        <Button onClick={ onCancel } theme={theme}>{ cancelTxt }</Button> }
      </div>
    </ThemeComponent>
  </Popup>

}
