import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'


export function InfiniteTable ({ values, onLoad, cols, hasMore, children, id, theme, className = '', ...props}) {
  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.infinitetable)
  const targetId = (id ? '-' : '') + 'table'
  return <ThemeComponent className={"infinite-table " + className} name="infinitetable" theme={theme}>
    <Header cols={cols} theme={theme}/>
    <div id={targetId} className="table">
      <InfiniteScroll
        dataLength={values ? values.length : 0}
        next={ onLoad }
        hasMore={ hasMore }
        loader={ <ThemeComponent name="infinitetable.loader" key={ 0 }><Icon name={myTheme.loading_icon}/> Chargement en cours ...</ThemeComponent> }
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

export const Line = ({item, cols, theme, ...props}) => {
  return <ThemeComponent className="row" theme={theme} name={'infinitetable.line'}>
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

export const Header = ({cols, theme, ...props}) => {
  return <ThemeComponent className="header" theme={theme} name={'infinitetable.header'}>
    {
      cols.map((col, i) => <Cell key={i} className="header-item" width={col.width}>{col.header || ''}</Cell>)
    }
  </ThemeComponent>
}
