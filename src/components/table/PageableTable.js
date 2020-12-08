import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThemeComponent from '../ThemeComponent'
import Icon from '../Icon'
import { useTheme } from '../../ThemeContext'
import Table from './Table'

const Container = styled.div`
`
export default function PageableTable({ onLoad, values, page, maxPage, className, cols, size, pagerPosition, ...props }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentMaxPage, setCurrentMaxPage] = useState(1)
  const [currentValues, setCurrentValues] = useState([])
  const loadPage = async (p) => {
    setCurrentPage(p)
    const result = await onLoad(p, size)
    if(Array.isArray(result)){
      setCurrentValues(result)
    } else {
      setCurrentMaxPage(Math.floor(result.count / size))
      setCurrentValues(result.items)
    }
  }
  const tablePage = page ? page : currentPage
  const items = values ? values : currentValues
  const max = maxPage ? maxPage : currentMaxPage
  const pagerTop = !pagerPosition || pagerPosition.indexOf('top') > -1
  const pagerBottom = pagerPosition && pagerPosition.indexOf('bottom') > -1
  useEffect(() => {
    loadPage(tablePage)
  }, [])

  return <ThemeComponent container={ Container } className={ 'pageable-table ' + className }>
    { pagerTop && <Pager onLoad={loadPage} page={tablePage} maxPage={max}/>}
      <Table cols={cols} values={items}/>
    { pagerBottom && <Pager onLoad={loadPage} page={tablePage} maxPage={max}/>}
  </ThemeComponent>
}

const PagerContainer = styled.div`
  display: flex;
  align-items: center;
  > .pager-icon {
    margin: 0 ${props => props.variable.padding.xs};
    cursor: pointer;
    color: ${props => props.palette.primary};
  }
  > .pager-page {
    cursor: pointer;
    color: ${props => props.palette.primary};
    padding: ${props => props.variable.padding.xs};
    border-radius: ${props => props.variable.radius};
  }
  
  > .pager-page.active {
    background-color: ${props => props.palette.primary};
    color: ${props => props.palette.inverse};
  }
`

function Pager({ page, maxPage, onLoad, className, ...props }) {
  const theme = useTheme()
  const maxShow = theme.variable.table.maxPager
  const start = (maxPage <= maxShow || page < 2) ? 1 : Math.min(maxPage - maxShow, page - 1)
  const end =  maxPage - page <= maxShow ? maxPage: Math.min(maxPage, (page + maxShow - 4))

  return <ThemeComponent container={ PagerContainer } className={ 'pager ' + className } {...props}>
    { page > 1 && <Icon className="pager-icon" name="chevron_left" onClick={() => onLoad(page - 1)}/> }
    {
      Array(end - start + 1).fill(0).map((v, i) => {
          const thePage = start + i
          const classN = 'pager-page' + (thePage === page ? ' active' : '')
          return <span key={'pager'+i} className={classN} onClick={() => onLoad(start + i)}>{ start + i }</span>
        }
      )
    }
    {
      end !== maxPage && <span className="pager-page"> ... </span>
    }
    {
      end !== maxPage && <span key={'pager'+maxPage} className="pager-page" onClick={() => onLoad(maxPage)}>{ maxPage }</span>
    }
    { page < maxPage && <Icon className="pager-icon" name="chevron_right" onClick={() => onLoad(page + 1)}/> }
  </ThemeComponent>
}
