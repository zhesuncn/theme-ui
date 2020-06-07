"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.field = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  ", "\n  \n  &.closable > .label{\n    cursor: pointer;  \n  }\n  \n  & > .label {\n    ", "\n    > .up, > .down {\n      font-size:.8em;\n      padding-right: 3px;\n    }\n  }\n  \n  & > .underline {\n    width: 62px;\n    height: 2px;\n    background-color: ", ";\n    margin-bottom: 10px;\n  }\n  \n  > .closable-content.hide{\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var field = {
  container: _styledComponents.default.div(_templateObject(), function (props) {
    return props.direction || 'column';
  }, function (props) {
    return props.direction === 'column' ? '' : 'align-items: center;';
  }, function (props) {
    return props.direction === 'column' ? 'margin-bottom: 5px;' : 'margin-right: 10px;';
  }, function (props) {
    return props.palette.blue_dark;
  })
};
exports.field = field;