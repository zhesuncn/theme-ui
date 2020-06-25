export function getDelimiterREByDelimiter(delimiter) {
  return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g')
}

export function stripDelimiters(value, delimiter, delimiters) {
  // single delimiter
  if (delimiters.length === 0) {
    var delimiterRE = delimiter ? getDelimiterREByDelimiter(delimiter) : ''
    return value.replace(delimiterRE, '')
  }

  // multiple delimiters
  delimiters.forEach(function (current) {
    current.split('').forEach(function (letter) {
      value = value.replace(getDelimiterREByDelimiter(letter), '')
    })
  })

  return value
}

function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
  var oldRawValue, newRawValue, lengthOffset

  oldRawValue = stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters)
  newRawValue = stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters)
  lengthOffset = newRawValue.length - oldRawValue.length

  return (lengthOffset !== 0) ? (lengthOffset / Math.abs(lengthOffset)) : 0
}

export function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
  // If cursor was at the end of value, just place it back.
  // Because new value could contain additional chars.
  if (oldValue.length === prevPos) {
    return newValue.length
  }
  return prevPos + getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters)
}

export function setSelection(element, position) {
  if(!element || !element.current) {
    return
  }
  // cursor is already in the end
  if (element.current.value && element.current.value.length <= position) {
    return
  }

  if (element.current.createTextRange) {
    let range = element.current.createTextRange()

    range.move('character', position)
    range.select()
  } else {
    try {
      element.current.setSelectionRange(position, position)
    } catch (e) {
      // eslint-disable-next-line
      console.warn('The input element type does not support selection')
    }
  }
}

export class Formatter {
  constructor(maxLength) {
    this.delimiter = ''
    this.prefix = ''
    this.delimiters = []
    this.maxLength = maxLength
  }

  init() {
    this.delimiterRE = this.delimiter ? new RegExp('\\' + this.delimiter, 'g') : ''
  }

  format(raw) {
    return raw
  }
  getRawValue(value) {
    let rawValue = value
    if (this.delimiter || this.delimiters.length > 0) {
      rawValue = stripDelimiters(rawValue, this.delimiter, this.delimiters)
    }
    if (this.maxLength) {
      rawValue = rawValue.substring(0, this.maxLength)
    }
    return rawValue
  }
}
export class NumberFormatter extends Formatter {
  constructor(maxLength) {
    super(maxLength)
  }

  format(raw) {
    raw = super.format(raw)
    raw = raw.replace(/[^\d]/g, '')
    return raw
  }

  getRawValue(value) {
    return typeof value === 'string' ? value.replace(/[^\d]/g, '') : ''
  }
}
export class DecimalFormatter extends Formatter {
  constructor(decimalDelimiter, decimalLength) {
    super()
    this.decimalDelimitter = decimalDelimiter || ','
    this.decimalLength = decimalLength
  }

  format(raw) {
    raw = super.format(raw)
    raw = raw.replace(/[^\d.]/g, '')
    raw = raw.replace(/[.]/, this.decimalDelimitter)
    raw = raw.replace(/[.]/g, '')
    return raw
  }

  getRawValue(value) {
    let raw = super.getRawValue(value)
    if (raw[0] === this.decimalDelimitter) {
      raw = '0' + raw
    }
    raw = raw.replace(new RegExp('\\' + this.decimalDelimitter), '.')
    raw = raw.replace(new RegExp('\\' + this.decimalDelimitter, 'g'), '')
    return raw
  }
}

export class PhoneFormatter extends Formatter {
  constructor(maxLength) {
    super(maxLength)
    this.delimiter = ' '
  }

  format(raw) {
    raw = super.format(raw)
    raw = raw.replace(/[^\d]/g, '')
    raw = raw.substring(0, this.maxLength)
    let result = '', current = ''

    for (let i = 0, iMax = raw.length; i < iMax; i++) {
      current = raw.charAt(i)
      if (i % 2 === 0 && i !== 0 ) {
        result += this.delimiter
      }
      result += current
    }
    return result
  }
}

export function getPostDelimiter(value, delimiter, delimiters) {
  // single delimiter
  if (delimiters.length === 0) {
    return value.slice(-delimiter.length) === delimiter ? delimiter : ''
  }

  // multiple delimiters
  var matchedDelimiter = ''
  delimiters.forEach(function (current) {
    if (value.slice(-current.length) === current) {
      matchedDelimiter = current
    }
  })

  return matchedDelimiter
}
