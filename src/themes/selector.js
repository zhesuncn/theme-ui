import styled from 'styled-components'

export const selector = {
  open_icon: 'arrow',
  container: styled.select`
    padding: 12px 25px 12px 0;
    border: 0;
    border-radius: 0;
    border-bottom: 3px solid ${props => props.palette.gray_border_light};
    background-color: ${props => props.palette.white};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-position: right 5px bottom 16px;
    background-repeat: no-repeat;
    font-size:14px;
    color: ${props => props.palette.black_grey};
    white-space: normal;
    outline: none;
    &.validate {
      border-bottom: 3px solid ${props => props.palette.green};
    }
    &.placeholder {
      color: ${props => props.palette.black_grey_3};
    }
    &:focus {
      border-bottom: 3px solid  ${props => props.palette.gray_border_active};
    }
    &::-ms-expand {
      display: none;
    }
  `
}
