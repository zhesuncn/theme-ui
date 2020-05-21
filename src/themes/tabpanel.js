import styled from 'styled-components'

export const tabpanel = {
  container: styled.div`
    display: flex;
  `,
  tabitem: {
    container: styled.div`
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
  }
}
