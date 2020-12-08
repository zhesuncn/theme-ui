import styled from 'styled-components'

const Cell = styled.div`
  display: flex;
  ${props => props.width ? `width: ${props.width};` : ''}
  align-items: center;
  justify-content: flex-start;
  ${props => props.flex || !props.width ? `flex: ${props.flex || 1};` : ''}
`

export default Cell
