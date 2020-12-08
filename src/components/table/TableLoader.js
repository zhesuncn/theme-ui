import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import ThemeComponent from '../ThemeComponent'
import { useTheme } from '../../ThemeContext'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.variable.padding.xs};
  color: ${props => props.palette.blue_dark};
  font-weight: bold;
  > svg {
    fill: ${props => props.palette.blue_dark};
    margin-right: ${props => props.variable.padding.m};
  }
`

export default function TableLoader({ ...props }) {
  const theme = useTheme()
  return <ThemeComponent className="infinite-table-loader" key={ 0 }
                         container={Container}>
    <Icon name={theme.images.loading_icon}/> Chargement en cours ...
  </ThemeComponent>
}
