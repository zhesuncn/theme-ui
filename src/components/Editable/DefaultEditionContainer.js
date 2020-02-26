import React from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import { getCurrentTheme } from '../../themes/util'
import { StyledDiv } from '../Styled'
import { get } from 'lodash'

const DefaultEditionContainer = ({children, label, onConfirm, onCancel, theme, ...props}) => {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.editable)
  console.log(myTheme)
  return (
    <StyledDiv className='default-edition' styles={get(myTheme, 'edition_styles', '')}>
      {label && <div className='label'>{label}</div>}
      <Icon name={myTheme.confirm_icon} onClick={onConfirm}/>
      <Icon name={myTheme.cancel_icon}  onClick={onCancel}/>
      {children}
  </StyledDiv>)
}
export default DefaultEditionContainer
