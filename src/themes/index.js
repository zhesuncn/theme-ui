import { button } from './button'
import { input } from './input'

const defaultTheme = {
  palette: {
    primary: '#003F90',
    secondary: '#27A893',
    inverse: '#FFFFFF',
    error: '#ff4646',
    gray_border_light: '#F3F3F3',
    gray_border_active: '#AFAFAF',
    text_light: '#212121'
  },
  component: {
    button,
    input,
  }
}

export {defaultTheme}