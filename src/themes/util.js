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
  let newTheme = Object.assign({}, theme)
  Object.keys(theme).forEach((k => {
    if(k.indexOf('styles') > -1) {
      let styles = newTheme[k]
      Object.keys(palette).forEach(key => {
        const regex = new RegExp(key + ';', 'g')
        styles = styles.replace(regex, palette[key] + ';')
        const regex2 = new RegExp(key + ' ', 'g')
        styles = styles.replace(regex2, palette[key] + ' ')
      })
      newTheme[k] = styles
    }
  }))
  return newTheme
}
function getCurrentTheme (fromProps, fromContext) {
  return fromProps ? fromProps : (fromContext ? fromContext : {})
}
export {
  createStyleString,
  compilePalette,
  getCurrentTheme
}
