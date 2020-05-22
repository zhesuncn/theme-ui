"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tag = exports.h1 = exports.error = exports.label = exports.text = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n    background:  ", ";\n    padding: 5px 10px;\n    display: inline-block;\n    font-weight: 600;\n    border-radius: 5px;\n    & > .btn {\n      margin-left: 5px;\n      cursor: pointer;\n    }\n    & > .btn:hover {\n      opacity: 0.5;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      font-size: 24px;\n      font-weight: bold\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

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
var h1 = {
  container: _styledComponents.default.h1(_templateObject5())
};
exports.h1 = h1;
var tag = {
  container: _styledComponents.default.div(_templateObject6(), function (props) {
    return props.palette.grey_light;
  })
};
exports.tag = tag;