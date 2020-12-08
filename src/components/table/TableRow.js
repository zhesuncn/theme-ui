import styled from 'styled-components'
import ThemeComponent from '../ThemeComponent'
import React from 'react'
import Cell from './Cell'

const LineContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${props => props.variable.padding.xs} 0;
  background-color: ${props => props.palette.white};
  min-height: 39px;
  border-bottom: ${props => props.variable.table.rowBorder} solid ${props => props.palette.border_light};
  > div:first-child {
    padding-left: ${props => props.variable.padding.m};
  }
`
const TableRow = ({item, cols, theme, ...props}) => {
  return <ThemeComponent container={LineContainer} className="row">
    {
      cols.map((col, i) => <Cell key={i} className={'item' + col.key? '-' + col.key: ''} width={col.width}>
        {
          col.render ? col.render(item) : (
            col.key && item ? item[col.key] : null
          )
        }
      </Cell>)
    }
  </ThemeComponent>
}

export default TableRow
