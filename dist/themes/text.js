"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.label = exports.text = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      font-weight: bold;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-weight: bold;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var text = {
  label: {
    container: _styledComponents.default.span(_templateObject())
  },
  error: {
    container: _styledComponents.default.span(_templateObject2(), function (props) {
      return props.palette.red;
    })
  }
};
exports.text = text;
var label = {
  container: _styledComponents.default.span(_templateObject3())
};
exports.label = label;
var error = {
  container: _styledComponents.default.span(_templateObject4(), function (props) {
    return props.palette.red;
  })
};
exports.error = error;