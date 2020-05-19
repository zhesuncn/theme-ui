import styled from 'styled-components'

export const input = {
  container: styled.input `
  border: 0;
  border-bottom: 3px solid ${props => props.palette.gray_border_light};
  width:'100%';
  font-size:14px;
  text-align: left;
  padding: 8px 0;
  border-radius:0;
  outline: none;
  &:focus {
    border-bottom: 3px solid  ${props => props.palette.gray_border_active};
  }
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.palette.black_grey_3};
    opacity: 0.5;
  }
  &.error {
    border-bottom: 3px solid ${props => props.palette.red};
  }
  &.validate {
    border-bottom: 3px solid ${props => props.palette.green};
  }
`
}
