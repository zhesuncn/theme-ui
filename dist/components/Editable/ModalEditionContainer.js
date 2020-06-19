"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    maxHeight: '80%',
    overflowY: 'auto',
    zIndex: 100,
    background: '#FFFFFF'
  }
};

var ModalEditionContainer = function ModalEditionContainer(_ref) {
  var children = _ref.children,
      edition = _ref.edition,
      label = _ref.label,
      onConfirm = _ref.onConfirm,
      confirmTxt = _ref.confirmTxt,
      onCancel = _ref.onCancel,
      cancelTxt = _ref.cancelTxt,
      props = _objectWithoutProperties(_ref, ["children", "edition", "label", "onConfirm", "confirmTxt", "onCancel", "cancelTxt"]);

  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: edition,
    style: customStyles
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    className: "label"
  }, label), children, /*#__PURE__*/_react.default.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "narrow",
    onClick: onConfirm
  }, confirmTxt || 'Confirm'), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "narrow",
    color: "inverse",
    style: {
      marginLeft: '20px'
    },
    onClick: onCancel
  }, cancelTxt || 'Cancel')));
};

var _default = ModalEditionContainer;
exports.default = _default;