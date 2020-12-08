import React from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import ThemeComponent from '../ThemeComponent'

const DefaultEditionContainer = ({ children, label, onConfirm, onCancel, ...props }) => {
  const theme = useTheme()
  return (
    <ThemeComponent className='default-edition'>
      <Icon name={ theme.images.confirm_icon } onClick={ onConfirm }/>
      <Icon name={ theme.images.cancel_icon } onClick={ onCancel }/>
      { children }
    </ThemeComponent>)
}
export default DefaultEditionContainer
