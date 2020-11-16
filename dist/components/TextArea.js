"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _Field = _interopRequireDefault(require("./Field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultContainer = _styledComponents.default.textarea(_templateObject());

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      value = _ref.value,
      onValueChanged = _ref.onValueChanged,
      error = _ref.error,
      label = _ref.label,
      direction = _ref.direction,
      props = _objectWithoutProperties(_ref, ["className", "value", "onValueChanged", "error", "label", "direction"]);

  var classN = className || '';
  classN += error ? ' error' : value ? ' validate' : '';

  var valueChanged = function valueChanged(e) {
    var inputValue = e.target.value;
    onValueChanged && onValueChanged(inputValue);
  };

  return /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: label,
    direction: direction,
    className: classN
  }, /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "textarea",
    defaultContainer: defaultContainer,
    onChange: valueChanged
  }, props)));
};

var _default = TextArea;
exports.default = _default;