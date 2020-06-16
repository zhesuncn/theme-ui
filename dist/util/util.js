"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatValue = formatValue;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function expandFormatRepetitions(format) {
  return format.reduce(function __reducePatterns(patterns, nextItem) {
    if (nextItem.repeat > 1) {
      var expanded = [];

      var copy = _objectSpread({}, nextItem);

      delete copy.repeat;

      for (var i = 0; i < nextItem.repeat; i += 1) {
        expanded.push(_objectSpread({}, copy));
      }

      return [].concat(_toConsumableArray(patterns), expanded);
    }

    return [].concat(_toConsumableArray(patterns), [nextItem]);
  }, []);
}

function formatValue(value) {
  var formatSpec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!value) return {
    formatted: '',
    raw: null
  };
  var format = expandFormatRepetitions(formatSpec);

  if (format.length > 0) {
    var characters = value.split("");
    var formattedValue = "",
        rawValue = "";

    while (format.length > 0 && characters.length > 0) {
      var pattern = format.shift();

      if (_typeof(pattern.char) === "object") {
        while (characters.length > 0 && pattern.char.test(characters[0]) !== true) {
          characters.shift();
        }

        if (characters.length > 0) {
          formattedValue += characters[0];
          rawValue += characters[0];
          characters.shift();
        }
      } else if (typeof pattern.exactly === "string") {
        if (pattern.exactly.length !== 1) {
          throw new Error("Unable to format value: 'exactly' value should be of length 1: ".concat(pattern.exactly));
        }

        formattedValue += pattern.exactly;

        if (pattern.exactly === characters[0]) {
          characters.shift();
        }
      } else {
        throw new Error("Unable to format value: Invalid format specification: ".concat(JSON.stringify(pattern)));
      }
    }

    return {
      formatted: formattedValue,
      raw: rawValue
    };
  }

  return {
    formatted: value,
    raw: value
  };
}