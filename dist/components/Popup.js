"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Popup;
exports.Prompt = Prompt;

var _react = _interopRequireWildcard(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _ThemeContext = require("../ThemeContext");

var _Button = _interopRequireDefault(require("./Button"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: column;\n  > textarea {\n    margin-top: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Popup(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      children = _ref.children,
      styles = _ref.styles,
      props = _objectWithoutProperties(_ref, ["isOpen", "onClose", "children", "styles"]);

  var theme = (0, _ThemeContext.useTheme)();
  var style = {
    style: {
      overlay: {
        zIndex: 100,
        backgroundColor: 'rgba(63,63,63,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      content: {
        minWidth: '500px',
        maxHeight: '80%',
        overflowY: 'auto',
        zIndex: 100,
        background: '#FFFFFF'
      }
    }
  };
  return (
    /*#__PURE__*/
    _react.default.createElement(_reactModal.default, _extends({
      isOpen: isOpen,
      style: style,
      bodyOpenClassName: 'fix-modal',
      className: "popup",
      onRequestClose: onClose
    }, props), children)
  );
}

var PromptContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.variable.padding.m;
}, function (props) {
  return props.variable.padding.m;
});

function Prompt(_ref2) {
  var title = _ref2.title,
      onConfirm = _ref2.onConfirm,
      onCancel = _ref2.onCancel,
      confirmTxt = _ref2.confirmTxt,
      cancelTxt = _ref2.cancelTxt,
      disableConfirm = _ref2.disableConfirm,
      props = _objectWithoutProperties(_ref2, ["title", "onConfirm", "onCancel", "confirmTxt", "cancelTxt", "disableConfirm"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  return (
    /*#__PURE__*/
    _react.default.createElement(Popup, props,
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      className: "prompt-context",
      container: PromptContainer
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "title"
    }, title),
    /*#__PURE__*/
    _react.default.createElement(_TextArea.default, {
      value: msg,
      onValueChange: setMsg,
      rows: 20
    }),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "actions"
    },
    /*#__PURE__*/
    _react.default.createElement(_Button.default, {
      onClick: function onClick() {
        return onConfirm && onConfirm(msg);
      },
      disabled: disableConfirm
    }, confirmTxt), onCancel &&
    /*#__PURE__*/
    _react.default.createElement(_Button.default, {
      onClick: onCancel
    }, cancelTxt))))
  );
}