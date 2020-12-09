import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const ItemContainer = styled.div`
  border-bottom: 2px solid ${ props => props.palette.gray_border_light };
  color: ${ props => props.palette.black_grey };
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  &.active{
    border-bottom: 2px solid ${props => props.palette.blue_dark};
    color: ${props => props.palette.black_grey};
  }
  &.disable{
    color: ${props => props.palette.black_grey_3};
  }
`
const TabItem = ({ children, active, disabled, onClick, ...props }) => {
  let classN = 'tab-item'
  if (active) {
    classN += ' active'
  }
  if (disabled) {
    classN += ' disabled'
  }
  return <ThemeComponent container={ItemContainer} className={ classN } onClick={ onClick } { ...props }>
    { children }
  </ThemeComponent>
}

const TabPanelContainer = styled.div`
  display: flex;
`
const TabPanel = ({ defaultIndex, onTabChanged, children, style, ...props }) => {
  const [active, setActive] = useState(defaultIndex ? defaultIndex : 0)
  const [component, setComponent] = useState(null)
  const history = useHistory()
  const location = useLocation()
  const isKnownPath = React.Children.map(children, (child => child.props.path === location.pathname)).filter(b => b).length > 0

  return (<ThemeComponent container={TabPanelContainer} className='tab-items' style={ style }>
      {

        React.Children.map(children, (child, index) => {
          const isActive = index === active && isKnownPath
          if (isActive && location && child.props.path && location.pathname !== child.props.path) {
            history.push(child.props.path)
          }
          return React.cloneElement(child, {
            active: isActive, key: index, onClick: () => {
              setActive(index)
              onTabChanged && onTabChanged(child.props.path, index)
              if (history && child.props.path) {
                history.push(child.props.path)
              }
              if (child.props.component) {
                setComponent(child.props.component)
              }
            }
          })
        })
      }
    {
      component && React.createElement(component, props)
    }
  </ThemeComponent>)
}

export { TabItem, TabPanel }
