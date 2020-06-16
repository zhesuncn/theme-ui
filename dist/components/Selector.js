"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

var _svg = require("../svg");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _Field = _interopRequireDefault(require("./Field"));

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

var defaultContainer = _styledComponents.default.select(_templateObject());

var Selector = function Selector(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      children = _ref.children,
      value = _ref.value,
      getValue = _ref.getValue,
      getLabel = _ref.getLabel,
      className = _ref.className,
      theme = _ref.theme,
      label = _ref.label,
      direction = _ref.direction,
      canClean = _ref.canClean,
      props = _objectWithoutProperties(_ref, ["options", "placeholder", "onChange", "children", "value", "getValue", "getLabel", "className", "theme", "label", "direction", "canClean"]);

  var _useState = (0, _react.useState)(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  (0, _react.useEffect)(function () {
    setCurrent(value);
  }, [value]);
  var classN = className || '';

  if (current === '') {
    classN += ' placeholder';
  } else if (current) {
    classN += ' validate';
  }

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.selector);

  var selectChanged = function selectChanged(e) {
    setCurrent(e.target.value);
    onChange && onChange(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: label,
    direction: direction,
    className: classN
  }, /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    theme: theme,
    name: "selector",
    defaultContainer: defaultContainer,
    onChange: selectChanged,
    value: current,
    open_icon: (0, _svg.getSrc)(myTheme.open_icon)
  }, props), placeholder && /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: !canClean,
    hidden: true
  }, placeholder), Array.isArray(options) && options.map(function (item, index) {
    var value, label;

    if (item instanceof Object) {
      value = getValue ? getValue(item) : item.code;
      label = getLabel ? getLabel(item) : item.name;
    } else {
      value = item;
      label = item;
    }

    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: value
    }, label);
  }), children));
};

var _default = Selector;
exports.default = _default;