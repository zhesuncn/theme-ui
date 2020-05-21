"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabpanel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border-bottom: 2px solid ", ";\n      color: ", ";\n      padding: 10px 20px;\n      cursor: pointer;\n      font-weight: 600;\n      &.active{\n        border-bottom: 2px solid ", ";\n        color: ", ";\n      }\n      &.disable{\n        color: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tabpanel = {
  container: _styledComponents.default.div(_templateObject()),
  tabitem: {
    container: _styledComponents.default.div(_templateObject2(), function (props) {
      return props.palette.gray_border_light;
    }, function (props) {
      return props.palette.black_grey;
    }, function (props) {
      return props.palette.blue_dark;
    }, function (props) {
      return props.palette.black_grey;
    }, function (props) {
      return props.palette.black_grey_3;
    })
  }
};
exports.tabpanel = tabpanel;