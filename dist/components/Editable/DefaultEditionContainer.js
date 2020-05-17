"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _ThemeContext = require("../../ThemeContext");

var _util = require("../../themes/util");

var _Styled = require("../Styled");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DefaultEditionContainer = function DefaultEditionContainer(_ref) {
  var children = _ref.children,
      label = _ref.label,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "label", "onConfirm", "onCancel", "theme"]);

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.editable);
  console.log(myTheme);
  return _react.default.createElement(_Styled.StyledDiv, {
    className: "default-edition",
    styles: (0, _lodash.get)(myTheme, 'edition_styles', '')
  }, label && _react.default.createElement("div", {
    className: "label"
  }, label), _react.default.createElement(_Icon.default, {
    name: myTheme.confirm_icon,
    onClick: onConfirm
  }), _react.default.createElement(_Icon.default, {
    name: myTheme.cancel_icon,
    onClick: onCancel
  }), children);
};

var _default = DefaultEditionContainer;
exports.default = _default;