import React from 'react'
import styled from 'styled-components'
import ThemeComponent from '../ThemeComponent'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableLoader from './TableLoader'

const Container = styled.div`
   > .table {
      height: calc(100% - 40px);
      overflow-y: auto;
    }
`
export default function Table({ className, values, cols, loading, ...props }) {

  return <ThemeComponent container={ Container } className={ 'simple-table ' + className }>
    <TableHeader cols={ cols }/>
    { loading && <TableLoader/> }
    { (values && values.length > 0) ?
      <div className="table">
        {
          values && values.map((v, i) => <TableRow key={ (v ? (v.id || v._id || i) : i) } item={ v } cols={ cols }/>)
        }
      </div> :
      <div className="empty-message">No result</div>
    }
  </ThemeComponent>
}
