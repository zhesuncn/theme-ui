import styled from 'styled-components'

const StyledDiv =  styled.div`
  ${props => props.styles}
`

const StyledInput = styled.input`
${props => props.styles}
`
const StyledButton = styled.button`
${props => props.styles}
`
const StyledLink =  styled.a`
${props => props.styles}
`

const StyledSelect =  styled.select`
  background-image: url(${props => props.open_icon});
  ${props => props.styles}
`

export {
  StyledDiv,
  StyledInput,
  StyledButton,
  StyledLink,
  StyledSelect
}