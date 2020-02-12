import {get} from 'lodash'
function createStyleString (palette, theme) {
  let s = ''
  Object.keys(theme).forEach(key => {
    const value = theme[key]
    if (s){
      s += '\n'
    }
    if (value instanceof Object){
      s+= `&${key} {
        ${createStyleString(palette, value)}
      }`
    } else {
      const list = value.split(' ').map(item => {
        return get(palette, item, item)
      })
      let transformed = list.join(' ')
      s += `${key}: ${transformed}`
    }
  })
  return s
}

function compilePalette (palette, theme) {
  let newTheme = theme
  Object.keys(palette).forEach(key => {
    const regex = new RegExp(key, 'g')
    newTheme = newTheme.replace(regex, palette[key])
  })
  return newTheme
}
export {
  createStyleString,
  compilePalette
}