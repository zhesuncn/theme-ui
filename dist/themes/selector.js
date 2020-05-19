"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selector = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 12px 25px 12px 0;\n    border: 0;\n    border-radius: 0;\n    border-bottom: 3px solid ", ";\n    background-color: ", ";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-position: right 5px bottom 16px;\n    background-repeat: no-repeat;\n    font-size:14px;\n    color: ", ";\n    white-space: normal;\n    outline: none;\n    &.validate {\n      border-bottom: 3px solid ", ";\n    }\n    &.placeholder {\n      color: ", ";\n    }\n    &:focus {\n      border-bottom: 3px solid  ", ";\n    }\n    &::-ms-expand {\n      display: none;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var selector = {
  open_icon: 'arrow',
  container: _styledComponents.default.select(_templateObject(), function (props) {
    return props.palette.gray_border_light;
  }, function (props) {
    return props.palette.white;
  }, function (props) {
    return props.palette.black_grey;
  }, function (props) {
    return props.palette.green;
  }, function (props) {
    return props.palette.black_grey_3;
  }, function (props) {
    return props.palette.gray_border_active;
  })
};
exports.selector = selector;