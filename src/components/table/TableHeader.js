import styled from 'styled-components'
import ThemeComponent from '../ThemeComponent'
import React from 'react'
import Cell from './Cell'


const HeaderContainer = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    color: ${props => props.palette.primary};
    font-weight: bold;
    > div:first-child {
      padding-left: ${props => props.variable.padding.m};
    }
  `
const TableHeader = ({cols, theme, ...props}) => {
  return <ThemeComponent container={HeaderContainer} className="table-header">
    {
      cols.map((col, i) => <Cell key={i} className="header-item" width={col.width}>{col.header || col.key || ''}</Cell>)
    }
  </ThemeComponent>
}

export default TableHeader
