"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  .switch-title {\n    margin-right: ", ";\n  }\n  label {\n    position: relative;\n    display: inline-block;\n    width: 52px;\n    height: 26px;\n    vertical-align: middle;\n    margin-right: ", ";\n  }\n\n  label .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: ", ";\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n  }\n\n  label .slider:before {\n      position: absolute;\n      content: '';\n      height: 20px;\n      width: 20px;\n      left: 4px;\n      bottom: 3px;\n      background-color: ", ";\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n  }\n\n  label[data-value='true'] .slider {\n      background-color: ", ";\n  }\n  \n  label[data-value='false'] .slider {\n      background-color: ", ";\n  }\n\n  label[data-value='true'] .slider:before {\n      -webkit-transform: translateX(25px);\n      -ms-transform: translateX(25px);\n      transform: translateX(25px);\n  }\n\n  label .slider.round {\n      border-radius: 26px;\n  }\n\n  label .slider.round:before {\n      border-radius: 50%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.colorTrue ? props.colorTrue : props.palette.success;
}, function (props) {
  return props.colorFalse ? props.colorFalse : props.palette.border_active;
});

var Switcher = function Switcher(_ref) {
  var children = _ref.children,
      value = _ref.value,
      getLabel = _ref.getLabel,
      onChange = _ref.onChange,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      props = _objectWithoutProperties(_ref, ["children", "value", "getLabel", "onChange", "className", "readonly"]);

  var _useState = (0, _react.useState)(value || false),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  (0, _react.useEffect)(function () {
    setCurrent(value);
  }, [value]);

  var onClick = function onClick() {
    if (readonly === false) {
      setCurrent(!current);
      onChange && onChange(!current);
    }
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      container: Container,
      className: 'switcher ' + className
    }, props), children &&
    /*#__PURE__*/
    _react.default.createElement("span", {
      className: "switch-title"
    }, children),
    /*#__PURE__*/
    _react.default.createElement("label", {
      "data-print": "hide",
      "data-value": '' + !!current,
      onClick: onClick
    },
    /*#__PURE__*/
    _react.default.createElement("span", {
      className: "slider round"
    })), getLabel &&
    /*#__PURE__*/
    _react.default.createElement("span", null, getLabel(current)))
  );
};

var _default = Switcher;
exports.default = _default;