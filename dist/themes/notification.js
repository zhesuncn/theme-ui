"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notification = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    border-radius: 5px;\n    padding: 5px 20px;\n    display: flex;\n    justify-content: space-between;\n    img {\n      cursor: pointer;\n      outline: none;\n      width: 12px;\n    }\n    svg {\n      cursor: pointer;\n      outline: none;\n      width: 12px;\n    }\n    &.info{\n      border-color: ", ";\n      color: ", ";\n    }\n    &.error{\n      border-color: error;\n      color: error;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var notification = {
  close_icon: 'close',
  container: _styledComponents.default.div(_templateObject(), function (props) {
    return props.palette.blue_dark;
  }, function (props) {
    return props.palette.green;
  }, function (props) {
    return props.palette.green;
  })
};
exports.notification = notification;