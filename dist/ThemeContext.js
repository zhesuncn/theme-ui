"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePalette = exports.useTheme = exports.default = exports.ThemeContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _themes = require("./themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ThemeContext = _react.default.createContext({});

exports.ThemeContext = ThemeContext;

function ThemeContextProvider(props) {
  var config = props.config ? props.config : _themes.defaultTheme;
  var myContext = config;
  return (
    /*#__PURE__*/
    _react.default.createElement(ThemeContext.Provider, {
      value: myContext
    }, props.children)
  );
}

var useTheme = function useTheme() {
  return (0, _react.useContext)(ThemeContext);
};

exports.useTheme = useTheme;

var usePalette = function usePalette() {
  return (0, _react.useContext)(ThemeContext).palette;
};

exports.usePalette = usePalette;
var _default = ThemeContextProvider;
exports.default = _default;