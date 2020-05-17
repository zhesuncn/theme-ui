"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = exports.StyledLink = exports.StyledButton = exports.StyledInput = exports.StyledDiv = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents.default.div(_templateObject(), function (props) {
  return props.styles;
});

exports.StyledDiv = StyledDiv;

var StyledInput = _styledComponents.default.input(_templateObject2(), function (props) {
  return props.styles;
});

exports.StyledInput = StyledInput;

var StyledButton = _styledComponents.default.button(_templateObject3(), function (props) {
  return props.styles;
});

exports.StyledButton = StyledButton;

var StyledLink = _styledComponents.default.a(_templateObject4(), function (props) {
  return props.styles;
});

exports.StyledLink = StyledLink;

var StyledSelect = _styledComponents.default.select(_templateObject5(), function (props) {
  return props.open_icon;
}, function (props) {
  return props.styles;
});

exports.StyledSelect = StyledSelect;