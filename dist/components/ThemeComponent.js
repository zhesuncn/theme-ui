"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ThemeComponent = function ThemeComponent(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      name = _ref.name,
      defaultContainer = _ref.defaultContainer,
      props = _objectWithoutProperties(_ref, ["theme", "children", "name", "defaultContainer"]);

  var themeContext = (0, _ThemeContext.useTheme)();
  var palette = (0, _ThemeContext.usePalette)();
  var myTheme = (0, _util.getCurrentTheme)(theme, (0, _lodash.get)(themeContext, name));
  var Container = (0, _lodash.get)(myTheme, 'container', defaultContainer);
  return _react.default.createElement(Container, _extends({
    palette: palette
  }, props), children);
};

var _default = ThemeComponent;
exports.default = _default;