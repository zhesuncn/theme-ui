import styled from 'styled-components'

const infinitetable = {
 container: styled.div`
    > .table {
      height: calc(100% - 20px);
      overflow-y: auto;
    }
  `,
  header: {
    container: styled.div`
      display: flex;
      height: 40px;
      width: 100%;
      color: ${props => props.palette.blue_dark};
      font-weight: bold;
      > div:first-child {
        padding-left: 20px;
      }
    `
  },
  line: {
   container: styled.div`
      display: flex;
      width: 100%;
      margin: 5px 0;
      background-color: ${props => props.palette.white};
      min-height: 39px;
      > div:first-child {
        padding-left: 20px;
      }
    `
  },
  loader: {
   container:  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: ${props => props.palette.blue_dark};
    font-weight: bold;
    > svg {
      fill: ${props => props.palette.blue_dark};
      margin-right: 20px;
    }
  `
  }

}
export default infinitetable
