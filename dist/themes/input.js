"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  border-bottom: 3px solid ", ";\n  width:'100%';\n  font-size:14px;\n  text-align: left;\n  padding: 8px 0;\n  border-radius:0;\n  outline: none;\n  &:focus {\n    border-bottom: 3px solid  ", ";\n  }\n  &::placeholder {\n    font-size: 14px;\n    font-weight: 300;\n    color: ", ";\n    opacity: 0.5;\n  }\n  &.error {\n    border-bottom: 3px solid ", ";\n  }\n  &.validate {\n    border-bottom: 3px solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var input = {
  container: _styledComponents.default.input(_templateObject(), function (props) {
    return props.palette.gray_border_light;
  }, function (props) {
    return props.palette.gray_border_active;
  }, function (props) {
    return props.palette.black_grey_3;
  }, function (props) {
    return props.palette.red;
  }, function (props) {
    return props.palette.green;
  })
};
exports.input = input;