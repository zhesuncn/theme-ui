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

