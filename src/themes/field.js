import styled from 'styled-components'

export const field = {
  container: styled.div`
  display: flex;
  flex-direction: ${ props => props.direction || 'column' };
  ${ props => props.direction === 'column' ? '' : 'align-items: center;' }
  
  &.closable > .label{
    cursor: pointer;  
  }
  
  & > .label {
    ${ props => props.direction === 'column' ? 'margin-bottom: 5px;' : 'margin-right: 10px;' }
    > .up, > .down {
      font-size:.8em;
      padding-right: 3px;
    }
  }
  
  & > .underline {
    width: 62px;
    height: 2px;
    background-color: ${ props => props.palette.blue_dark };
    margin-bottom: 10px;
  }
  
  > .closable-content.hide{
    display: none;
  }
`
}
