"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleString = createStyleString;
exports.compilePalette = compilePalette;
exports.getCurrentTheme = getCurrentTheme;

var _lodash = require("lodash");

function createStyleString(palette, theme) {
  var s = '';
  Object.keys(theme).forEach(function (key) {
    var value = theme[key];

    if (s) {
      s += '\n';
    }

    if (value instanceof Object) {
      s += "&".concat(key, " {\n        ").concat(createStyleString(palette, value), "\n      }");
    } else {
      var list = value.split(' ').map(function (item) {
        return (0, _lodash.get)(palette, item, item);
      });
      var transformed = list.join(' ');
      s += "".concat(key, ": ").concat(transformed);
    }
  });
  return s;
}

function compilePalette(palette, theme) {
  var newTheme = Object.assign({}, theme);
  Object.keys(theme).forEach(function (k) {
    if (k.indexOf('styles') > -1) {
      var styles = newTheme[k];
      Object.keys(palette).forEach(function (key) {
        var regex = new RegExp(key + ';', 'g');
        styles = styles.replace(regex, palette[key] + ';');
        var regex2 = new RegExp(key + ' ', 'g');
        styles = styles.replace(regex2, palette[key] + ' ');
      });
      newTheme[k] = styles;
    }
  });
  return newTheme;
}

function getCurrentTheme(fromProps, fromContext) {
  return fromProps ? fromProps : fromContext ? fromContext : {};
}