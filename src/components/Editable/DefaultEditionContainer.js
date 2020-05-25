import React from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import { getCurrentTheme } from '../../themes/util'
import ThemeComponent from '../ThemeComponent'


const DefaultEditionContainer = ({ children, label, onConfirm, onCancel, theme, ...props }) => {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.editable)
  return (
    <ThemeComponent name="editable.edition"
                    className='default-edition'>
      <Icon name={ myTheme.confirm_icon } onClick={ onConfirm }/>
      <Icon name={ myTheme.cancel_icon } onClick={ onCancel }/>
      { children }
    </ThemeComponent>)
}
export default DefaultEditionContainer
