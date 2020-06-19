"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = exports.H2 = exports.H1 = exports.Error = exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultContainer = _styledComponents.default.span;

var Label = function Label(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "label",
    className: className + ' label',
    defaultContainer: defaultContainer
  }, props), children);
};

exports.Label = Label;

var Error = function Error(_ref2) {
  var children = _ref2.children,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "error",
    className: className + 'error',
    defaultContainer: defaultContainer
  }, props), children);
};

exports.Error = Error;

var H1 = function H1(_ref3) {
  var children = _ref3.children,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      props = _objectWithoutProperties(_ref3, ["children", "className"]);

  return /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "h1",
    className: className + ' h1',
    defaultContainer: defaultContainer
  }, props), children);
};

exports.H1 = H1;

var H2 = function H2(_ref4) {
  var children = _ref4.children,
      _ref4$className = _ref4.className,
      className = _ref4$className === void 0 ? '' : _ref4$className,
      props = _objectWithoutProperties(_ref4, ["children", "className"]);

  return /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "h2",
    className: className + ' h2',
    defaultContainer: defaultContainer
  }, props), children);
};

exports.H2 = H2;

var Tag = function Tag(_ref5) {
  var children = _ref5.children,
      onClose = _ref5.onClose,
      onClick = _ref5.onClick,
      _ref5$className = _ref5.className,
      className = _ref5$className === void 0 ? '' : _ref5$className,
      props = _objectWithoutProperties(_ref5, ["children", "onClose", "onClick", "className"]);

  return /*#__PURE__*/_react.default.createElement(_ThemeComponent.default, _extends({
    name: "tag",
    className: className + ' tag'
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    onClick: onClick
  }, children), onClose && /*#__PURE__*/_react.default.createElement("span", {
    className: "btn",
    onClick: onClose
  }, " x"));
};

exports.Tag = Tag;