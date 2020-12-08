import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import { useTheme } from '../index'

const Table = styled.div`
    > .table {
      height: calc(100% - 40px);
      overflow-y: auto;
    }
`
const LoaderContainer = styled.div`
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
export function InfiniteTable ({ values, onLoad, cols, hasMore, children, id, className = '', ...props}) {
  const targetId = (id ? '-' : '') + 'table'
  const theme = useTheme()
  return <ThemeComponent container={Table} className={"infinite-table " + className}>
    <Header cols={cols}/>
    <div id={targetId} className="table">
      <InfiniteScroll
        dataLength={values ? values.length : 0}
        next={ onLoad }
        hasMore={ hasMore }
        loader={ <ThemeComponent className="infinitetable-loader" key={ 0 } container={LoaderContainer}><Icon name={theme.images.loading_icon}/> Chargement en cours ...</ThemeComponent> }
        scrollableTarget={targetId}
      >
        {
          values && values.map((v,i) => <Line key={ (v ? (v.id || v._id || i) : i) } item={ v } cols={ cols } />)
        }
      </InfiniteScroll>
    </div>
  </ThemeComponent>
}
export const Cell = styled.div`
  display: flex;
  ${props => props.width ? `width: ${props.width};` : ''}
  align-items: center;
  justify-content: flex-start;
  ${props => props.flex || !props.width ? `flex: ${props.flex || 1};` : ''}
`

const LineContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${props => props.variable.padding.xs} 0;
  background-color: ${props => props.palette.white};
  min-height: 39px;
  > div:first-child {
    padding-left: ${props => props.variable.padding.m};
  }
`
export const Line = ({item, cols, theme, ...props}) => {
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
export const Header = ({cols, theme, ...props}) => {
  return <ThemeComponent container={HeaderContainer} className="table-header">
    {
      cols.map((col, i) => <Cell key={i} className="header-item" width={col.width}>{col.header || ''}</Cell>)
    }
  </ThemeComponent>
}
