"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Text = require("./Text");

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  ", "\n  \n  &.field-closable > .label{\n    cursor: pointer;  \n  }\n  \n  & > .label {\n    ", "\n    > .field-up, > .field-down {\n      font-size:.8em;\n      padding-right: ", ";\n    }\n  }\n  \n  & > .field-underline {\n    width: 62px;\n    height: 2px;\n    background-color: ", ";\n    margin-bottom: ", ";\n  }\n  \n  > .closable-content.hide{\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (props) {
  return props.direction || 'column';
}, function (props) {
  return props.direction === 'column' ? '' : 'align-items: center;';
}, function (props) {
  return props.direction === 'column' ? "" : "margin-right: ".concat(props.variable.padding.s, ";");
}, function (props) {
  return props.variable.padding.xs;
}, function (props) {
  return props.palette.primary;
}, function (props) {
  return props.variable.padding.xs;
});

var Field = function Field(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick,
      closable = _ref.closable,
      closed = _ref.closed,
      props = _objectWithoutProperties(_ref, ["label", "children", "direction", "className", "onClick", "closable", "closed"]);

  var _useState = (0, _react.useState)(!closed),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var onClickLabel;

  if (closable || onClick) {
    onClickLabel = function onClickLabel(e) {
      closable && setShow(!show);
      onClick && onClick(e);
    };
  }

  return label ?
  /*#__PURE__*/
  _react.default.createElement(_ThemeComponent.default, _extends({
    container: Container,
    direction: direction,
    className: "field ".concat(closable ? 'closable' : '', " ").concat(className)
  }, props),
  /*#__PURE__*/
  _react.default.createElement(_Text.Label, {
    onClick: onClickLabel,
    style: {
      cursor: closable ? 'pointer' : 'default'
    }
  }, closable ? show ?
  /*#__PURE__*/
  _react.default.createElement("span", {
    className: "field-down"
  }, "\u25BC") :
  /*#__PURE__*/
  _react.default.createElement("span", {
    className: "field-up"
  }, "\u25B2") : '', label), direction === 'column' &&
  /*#__PURE__*/
  _react.default.createElement("div", {
    className: "field-underline"
  }), closable ?
  /*#__PURE__*/
  _react.default.createElement("div", {
    className: "field-closable-content ".concat(show ? 'show' : 'hide')
  }, children) : children) : children;
};

var _default = Field;
exports.default = _default;