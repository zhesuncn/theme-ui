import styled from 'styled-components'

export const notification = {
  close_icon: 'close',
  container: styled.div`
    border: 1px solid ${props =>props.palette.blue_dark};
    border-radius: 5px;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    img {
      cursor: pointer;
      outline: none;
      width: 12px;
    }
    svg {
      cursor: pointer;
      outline: none;
      width: 12px;
    }
    &.info{
      border-color: ${props => props.palette.green};
      color: ${props => props.palette.green};
    }
    &.error{
      border-color: error;
      color: error;
    }
  `
}
