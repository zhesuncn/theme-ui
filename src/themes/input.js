export const input = `
  border: 0;
  border-bottom: 3px solid gray_border_light;
  width:'100%';
  font-size:14px;
  text-align: left;
  padding: 12px 0;
  border-radius:0;
  outline: none;
  &:focus {
    border-bottom: 3px solid  gray_border_active;
  }
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: text_light;
    opacity: 0.5;
  }
  &.error {
    border-bottom: 3px solid error;
  }
  &.validate {
    border-bottom: 3px solid secondary;
  }
`