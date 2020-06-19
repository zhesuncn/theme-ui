"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    border: 1px solid ", ";\n    border-radius: 10px;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: bold;\n    background: ", ";\n    color: ", ";\n    outline: none;\n    svg {\n      margin-left: 10px;\n      fill: ", ";\n    }\n    &:hover{\n     opacity: 0.8;\n    }\n    &.disabled, &:disabled{\n      opacity: 0.2;\n    }\n    &.clear {\n      height: auto;\n      padding: 10px 0;\n      width: auto;\n      border: none;\n      background-color: transparent;\n      border-radius: 0;\n      display: flex;\n      align-items: center;\n      color: ", ";\n    }\n    &.clear svg{\n      fill: ", ";\n    }\n    &.invert {\n      background: transparent;\n      color: ", ";\n      border-color: ", ";\n      svg{\n        fill: ", ";\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var button = {
  loading_icon: 'loading',
  container: _styledComponents.default.a(_templateObject(), function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.palette.white;
  }, function (props) {
    return props.palette.white;
  }, function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.color || props.palette.green;
  }, function (props) {
    return props.color || props.palette.green;
  })
};
exports.button = button;