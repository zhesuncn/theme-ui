"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

var _Styled = require("./Styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "children"]);

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.label);
  return _react.default.createElement(_Styled.StyledDiv, _extends({
    styles: myTheme.styles
  }, props), children);
};

exports.Label = Label;

var Error = function Error(_ref2) {
  var theme = _ref2.theme,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["theme", "children"]);

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.error);
  return _react.default.createElement(_Styled.StyledDiv, _extends({
    styles: myTheme.styles
  }, props), children);
};

exports.Error = Error;