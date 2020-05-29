import { button } from './button'
import { input } from './input'
import { uploader } from './uploader'
import { switcher } from './switcher'
import { selector } from './selector'
import { notification } from './notification'
import { editable, editableInput } from './editable'
import { label, error, h1, tag, h2 } from './text'
import { field } from './field'
import { tabpanel } from './tabpanel'

const defaultTheme = {
  palette: {
    blue: '#016db8',
    blue_dark: '#14489f',
    white: '#FFFFFF',
    grey_light: '#d0d0d0',
    green: '#009c67',
    red: '#ff4646',
    yellow: '#ffcd00',
    blue_grey: '#555d6c',
    green_jade: '#00b59b',
    black_grey: '#1f1f1f',
    black_grey_3: 'rgb(31,31,31,0.3)',

    secondary: '#27A893',
    inverse: '#FFFFFF',
    gray_border_light: '#F3F3F3',
    gray_border_active: '#AFAFAF',
    gray_background: '#F0F0F0',
    gray_background_light: '#F6F6F6',
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
    error,
    h1,
    h2,
    tag,
    field,
    tabpanel
  }
}

export {defaultTheme}
