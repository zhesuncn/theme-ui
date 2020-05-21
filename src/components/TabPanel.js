import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'

const defaultContainer = styled.div

const TabItem = ({ children, active, disabled, onClick, ...props }) => {
  let classN = 'tab-item'
  if (active) {
    classN += ' active'
  }
  if (disabled) {
    classN += ' disabled'
  }
  return <ThemeComponent name={ 'tabpanel.tabitem' } className={ classN } onClick={ onClick } { ...props }>
    { children }
  </ThemeComponent>
}

const TabPanel = ({ defaultIndex, onTabChanged, children, style, theme, ...props }) => {
  const [active, setActive] = useState(defaultIndex ? defaultIndex : 0)
  const [component, setComponent] = useState(null)
  const history = useHistory()
  const location = useLocation()
  return (<ThemeComponent name="tabpanel" className='tab-items' style={ style } theme={ theme } defaultContainer={ defaultContainer }>
      {
        React.Children.map(children, (child, index) => {
          const isActive = index === active
          if (isActive && location && child.props.path && location.pathname !== child.props.path) {
            history.push(child.props.path)
          }
          return React.cloneElement(child, {
            theme, defaultContainer, active: isActive, key: index, onClick: () => {
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
