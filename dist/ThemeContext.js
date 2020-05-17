"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePalette = exports.useTheme = exports.default = exports.ThemeContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _util = require("./themes/util");

var _themes = require("./themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ThemeContext = _react.default.createContext({});

exports.ThemeContext = ThemeContext;

function ThemeContextProvider(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var config = props.config ? props.config : _themes.defaultTheme;
  var myContext = {
    theme: theme,
    palette: config.palette
  };
  (0, _react.useEffect)(function () {
    var config = props.config ? props.config : _themes.defaultTheme;
    var t = {};
    Object.keys(config.component).forEach(function (key) {
      t[key] = (0, _util.compilePalette)(config.palette, config.component[key]);
    });
    setTheme(t);
  }, [props.config]);
  return _react.default.createElement(ThemeContext.Provider, {
    value: myContext
  }, props.children);
}

var useTheme = function useTheme() {
  return (0, _react.useContext)(ThemeContext).theme;
};

exports.useTheme = useTheme;

var usePalette = function usePalette() {
  return (0, _react.useContext)(ThemeContext).palette;
};

exports.usePalette = usePalette;
var _default = ThemeContextProvider;
exports.default = _default;