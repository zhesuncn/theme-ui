import ThemeContextProvider from '../src/ThemeContext'
import React from 'react'
import Table from '../src/components/table/Table'
import PageableTable from '../src/components/table/PageableTable'

export default { title: 'Table'}

const cols = [{
    key: "name"
  },
  {
    key: "phone"
  }]

let values = Array(10).fill({name: 'Name', phone: "06 06 06 06 06"})

const onLoad = (page, size) => {
  const items = Array(10).fill({}).map((v, i) => {
    return {name: "name" + page + '_' + i, phone: page + ' 00 00 ' + i}
  })
  return {
    items,
    count: 155,
  }
}
export const simpleTable = () => <ThemeContextProvider><Table cols={cols} values={values}/></ThemeContextProvider>

export const pageableTable = () => <ThemeContextProvider><PageableTable cols={cols} onLoad={onLoad} size={10}/></ThemeContextProvider>

export const pageableBottomTable = () => <ThemeContextProvider><PageableTable cols={cols} onLoad={onLoad} size={10} pagerPosition="bottom"/></ThemeContextProvider>

