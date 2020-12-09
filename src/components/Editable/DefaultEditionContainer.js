import React from 'react'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import ThemeComponent from '../ThemeComponent'
import styled from 'styled-components'

const Container = styled.div`
  > svg {
    color: ${props => props.palette.primary};
    height: 12px;
  }
`
const DefaultEditionContainer = ({ children, label, onConfirm, onCancel, ...props }) => {
  const theme = useTheme()
  return (
    <ThemeComponent className='default-edition' container={Container}>
      <Icon name={ theme.images.confirm_icon } onClick={ onConfirm }/>
      <Icon name={ theme.images.cancel_icon } onClick={ onCancel }/>
      { children }
    </ThemeComponent>)
}
export default DefaultEditionContainer
