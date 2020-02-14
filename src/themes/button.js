export const button = `
  display: inline-block;
  border: 1px solid secondary;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  background: secondary;
  color: inverse;
  outline: none;
  &:hover{
   opacity: 0.8;
  }
  &.disabled &:disabled{
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
    color: secondary;
  }
`