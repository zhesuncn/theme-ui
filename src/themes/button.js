import styled from 'styled-components'

export const button = {
  loading_icon: 'loading',
  container: styled.a`
    display: inline-flex;
    border: 1px solid ${props => props.palette.green};
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background: ${props => props.palette.green};
    color: ${props => props.palette.white};
    outline: none;
    svg {
      margin-left: 10px;
      fill: ${props => props.palette.white};
    }
    &:hover{
     opacity: 0.8;
    }
    &.disabled, &:disabled{
      opacity: 0.2;
    }
    &.clear {
      height: auto;
      padding: 10px 0;
      width: auto;
      border: none;
      background-color: transparent;
      border-radius: 0;
      display: flex;
      align-items: center;
      color: ${props => props.palette.green};
    }
    &.clear svg{
      fill: ${props => props.palette.green};
    }
  `
}
