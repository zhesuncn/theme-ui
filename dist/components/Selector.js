"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = require("../ThemeContext");

var _svg = require("../svg");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _Field = _interopRequireDefault(require("./Field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n  padding:  ", " ", " ", " 0;\n  border: 0;\n  border-radius: 0;\n  border-bottom: ", " solid ", ";\n  background-color: ", ";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-position: right 5px bottom 16px;\n  background-repeat: no-repeat;\n  font-size:14px;\n  color: ", ";\n  white-space: normal;\n  outline: none;\n  &.validate {\n    border-bottom: 3px solid ", ";\n  }\n  &.placeholder {\n    color: ", ";\n  }\n  &:focus {\n    border-bottom: 3px solid  ", ";\n  }\n  &::-ms-expand {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.select(_templateObject(), function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.variable.padding.m;
}, function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.variable.input_border;
}, function (props) {
  return props.palette.border_light;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.palette.black_grey;
}, function (props) {
  return props.palette.success;
}, function (props) {
  return props.palette.black_grey_3;
}, function (props) {
  return props.palette.border_active;
});

var Selector = function Selector(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      children = _ref.children,
      value = _ref.value,
      getValue = _ref.getValue,
      getLabel = _ref.getLabel,
      className = _ref.className,
      label = _ref.label,
      direction = _ref.direction,
      canClean = _ref.canClean,
      props = _objectWithoutProperties(_ref, ["options", "placeholder", "onChange", "children", "value", "getValue", "getLabel", "className", "label", "direction", "canClean"]);

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

  var theme = (0, _ThemeContext.useTheme)();

  var selectChanged = function selectChanged(e) {
    setCurrent(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_Field.default, {
      label: label,
      direction: direction,
      className: classN
    },
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      className: "selector",
      container: Container,
      onChange: selectChanged,
      value: current,
      open_icon: (0, _svg.getSrc)(theme.images.open_icon)
    }, props), placeholder &&
    /*#__PURE__*/
    _react.default.createElement("option", {
      value: "",
      hidden: !canClean
    }, placeholder), Array.isArray(options) && options.map(function (item, index) {
      var value, label;

      if (item instanceof Object) {
        value = getValue ? getValue(item) : item.code;
        label = getLabel ? getLabel(item) : item.name;
      } else {
        value = item;
        label = item;
      }

      return (
        /*#__PURE__*/
        _react.default.createElement("option", {
          key: index,
          value: value
        }, label)
      );
    }), children))
  );
};

var _default = Selector;
exports.default = _default;