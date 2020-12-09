import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import ThemeComponent from '../ThemeComponent'
import TableRow from './TableRow'
import TableLoader from './TableLoader'
import TableHeader from './TableHeader'

const Container = styled.div`
    > .table {
      height: calc(100% - 40px);
      overflow-y: auto;
    }
`

export default function InfiniteTable ({ values, onLoad, cols, hasMore, children, id, className = '', ...props}) {
  const targetId = (id ? '-' : '') + 'table'
  return <ThemeComponent container={Container} className={"infinite-table " + className}>
    <TableHeader cols={cols}/>
    <div id={targetId} className="table">
      <InfiniteScroll
        dataLength={values ? values.length : 0}
        next={ onLoad }
        hasMore={ hasMore }
        loader={ <TableLoader/> }
        scrollableTarget={targetId}
      >
        {
          values && values.map((v,i) => <TableRow key={ (v ? (v.id || v._id || i) : i) } item={ v } cols={ cols } />)
        }
      </InfiniteScroll>
    </div>
  </ThemeComponent>
}
