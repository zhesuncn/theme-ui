import styled from 'styled-components'

export const text = {
  label: {
    container: styled.span`
      font-weight: bold;
    `
  },
  error: {
    container: styled.span`
      color: ${props => props.palette.red};
    `
  }
}

export const label = {
  container: styled.span`
      font-weight: bold;
    `
}

export const error = {
  container: styled.span`
      color: ${props => props.palette.red};
    `
}

export const h1 = {
  container: styled.h1`
      font-size: 24px;
      font-weight: bold
    `
}

export const h2 = {
  container: styled.h2`
      font-size: 22px;
      font-weight: bold
    `
}

export const tag = {
  container: styled.div`
    font-size: 14px;
    background:  ${props => props.palette.grey_light};
    padding: 5px 10px;
    display: inline-block;
    font-weight: 600;
    border-radius: 5px;
    & > .btn {
      margin-left: 5px;
      cursor: pointer;
    }
    & > .btn:hover {
      opacity: 0.5;
    }
  `
}
