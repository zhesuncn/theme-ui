"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _Field = _interopRequireDefault(require("./Field"));

var _util = require("../util/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var defaultContainer = _styledComponents.default.input(_templateObject());

var Input = function Input(_ref) {
  var className = _ref.className,
      value = _ref.value,
      onValueChanged = _ref.onValueChanged,
      error = _ref.error,
      label = _ref.label,
      direction = _ref.direction,
      formatter = _ref.formatter,
      suffix = _ref.suffix,
      props = _objectWithoutProperties(_ref, ["className", "value", "onValueChanged", "error", "label", "direction", "formatter", "suffix"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      raw = _useState2[0],
      setRaw = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      cursor = _useState6[0],
      setCursor = _useState6[1];

  var inputEl = (0, _react.useRef)(null);
  var classN = className || '';
  (0, _react.useEffect)(function () {
    if (value || value === '') {
      setRaw(value);
      var currentValue = formatter ? formatter.format(value) : value;
      setCurrent(currentValue);
    }
  }, [value, formatter]);
  (0, _react.useEffect)(function () {
    if (inputEl && formatter) {
      (0, _util.setSelection)(inputEl, cursor);
    }
  }, [inputEl, cursor, formatter, current]);
  classN += error ? ' error' : current ? ' validate' : '';

  var valueChanged = function valueChanged(ev) {
    var rawValue = ev.target.value;

    if (formatter) {
      var endPos = ev.target.selectionEnd;
      var currentValue = ev.target.value;
      rawValue = formatter.getRawValue(currentValue);
      endPos = (0, _util.getNextCursorPosition)(endPos, current, currentValue, formatter.delimiter, formatter.delimiters);
      ev.target.value = formatter.format(rawValue);
      setCursor(endPos);
    }

    if (rawValue !== raw) {
      setRaw(rawValue);
      onValueChanged && onValueChanged(rawValue);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: label,
    direction: direction,
    className: classN
  }, /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    elementRef: inputEl,
    name: "input",
    defaultContainer: defaultContainer,
    value: current,
    onChange: valueChanged
  }, props)), suffix && /*#__PURE__*/_react.default.createElement("span", {
    className: 'input-suffix'
  }, suffix));
};

var _default = Input;
exports.default = _default;