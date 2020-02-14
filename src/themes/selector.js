export const selector = {
  open_icon: 'arrow',
  styles: `
    padding: 12px 25px 12px 0;
    border: 0;
    border-radius: 0;
    border-bottom: 3px solid gray_border_light;
    background-color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-position: right 5px bottom 16px;
    background-repeat: no-repeat;
    font-size:14px;
    color: text_black;
    white-space: normal;
    outline: none;
    &.validate {
      border-bottom: 3px solid secondary;
    }
    &.placeholder {
      color: text_light;
    }
    &:focus {
      border-bottom: 3px solid  gray_border_active}
    }
    &::-ms-expand {
      display: none;
    }
  `
}