"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editableInput = exports.editable = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _svg = _interopRequireDefault(require("../svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    .btns{\n      display: flex;\n      align-items: center;\n    }\n    svg, img{\n      margin-right: 10px;\n      width: 16px;\n      cursor: pointer;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   .btns {\n      display: inline-flex;\n    }\n    .btns svg, .btns img{\n      margin-right: 10px;\n      width: 16px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var editable = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  container: _styledComponents.default.div(_templateObject()),
  edition: {
    container: _styledComponents.default.div(_templateObject2())
  }
};
exports.editable = editable;
var editableInput = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  container: _styledComponents.default.div(_templateObject3()),
  edition: {
    container: _styledComponents.default.div(_templateObject4())
  }
};
exports.editableInput = editableInput;