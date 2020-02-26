import React from 'react'
import Modal from 'react-modal'
import Button from '../Button'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    maxHeight: '80%',
    overflowY: 'auto',
    zIndex: 100,
    background: '#FFFFFF'
  }
}

const ModalEditionContainer = ({children, edition, label, onConfirm, confirmTxt, onCancel, cancelTxt,  ...props}) => {
    return <Modal
      isOpen={edition}
      style={customStyles}
    >
      {label && <div className='label'>{label}</div>}
      {children}
      <div className='actions'>
        <Button className='narrow' onClick={onConfirm}>{confirmTxt || 'Confirm'}</Button>
        <Button className='narrow' color='inverse' style={{marginLeft: '20px'}} onClick={onCancel}>{cancelTxt || 'Cancel'}</Button>
      </div>
    </Modal>
}
export default ModalEditionContainer