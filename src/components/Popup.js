import React, { useState } from 'react'
import Modal from 'react-modal'
import TextArea from './TextArea'
import ThemeComponent from './ThemeComponent'
import { useTheme } from '../ThemeContext'
import Button from './Button'
import styled from 'styled-components'

export default function Popup({ isOpen, onClose, children, styles, ...props }) {
  const theme = useTheme()
  const style =  {
    style: {
      overlay: {
        zIndex: 100,
        backgroundColor: 'rgba(63,63,63,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      content: {
        minWidth: '500px',
        maxHeight: '80%',
        overflowY: 'auto',
        zIndex: 100,
        background: '#FFFFFF'
      }
    }
  }
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


const PromptContainer = styled.div`
  padding: ${props => props.variable.padding.s} ${props => props.variable.padding.m};
  display: flex;
  flex-direction: column;
  > textarea {
    margin-top: ${props => props.variable.padding.m};
  }
`
export function Prompt({ title, onConfirm, onCancel, confirmTxt, cancelTxt, disableConfirm, ...props }) {
  const [msg, setMsg] = useState('')
  return <Popup { ...props }>
    <ThemeComponent className="prompt-context" container={PromptContainer}>
      <div className='title'>{ title }</div>
      <TextArea
        value={ msg }
        onValueChange={ setMsg }
        rows={ 20 }
      />
      <div className="actions">
        <Button onClick={ () => onConfirm && onConfirm(msg) }
                disabled={ disableConfirm }>{ confirmTxt }
        </Button>
        { onCancel &&
        <Button onClick={ onCancel }>{ cancelTxt }</Button> }
      </div>
    </ThemeComponent>
  </Popup>

}
