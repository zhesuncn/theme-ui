import { button } from './button'
import { input } from './input'
import { uploader } from './uploader'
import { switcher } from './switcher'
import { selector } from './selector'
import { notification } from './notification'
import { editable, editableInput } from './editable'
import { label, error } from './text'

const defaultTheme = {
  palette: {
    primary: '#003F90',
    secondary: '#27A893',
    inverse: '#FFFFFF',
    error: '#ff4646',
    gray_border_light: '#F3F3F3',
    gray_border_active: '#AFAFAF',
    gray_background: '#F0F0F0',
    gray_background_light: '#F6F6F6',
    text_light: '#212121',
    text_black: '#000000'
  },
  component: {
    button,
    input,
    uploader,
    switcher,
    selector,
    notification,
    editable,
    editableInput,
    label,
    error
  }
}

export {defaultTheme}
