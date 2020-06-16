"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = exports.popup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 16px 20px;\n    display: flex;\n    flex-direction: column;\n    > textarea {\n      margin-top: 10px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var popup = {
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
exports.popup = popup;
var prompt = {
  container: _styledComponents.default.div(_templateObject())
};
exports.prompt = prompt;