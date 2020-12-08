"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    border: ", " solid ", ";\n    border-radius: ", ";\n    padding: ", " ", ";\n    height: ", ";\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: bold;\n    background: ", ";\n    color: ", ";\n    outline: none;\n    .button-icon {\n      position: absolute;\n      fill: ", ";\n    }\n    &:hover{\n     opacity: 0.8;\n    }\n    &.disabled, &:disabled{\n      opacity: 0.2;\n    }\n    &.clear {\n      height: auto;\n      padding: ", " 0;\n      width: auto;\n      border: none;\n      background-color: transparent;\n      border-radius: 0;\n      display: flex;\n      align-items: center;\n      color: ", ";\n    }\n    &.clear .button-icon{\n      fill: ", ";\n    }\n    &.invert {\n      background: transparent;\n      color: ", ";\n      border-color: ", ";\n      .button-icon{\n        fill: ", ";\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.a(_templateObject(), function (props) {
  return props.variable.button.border;
}, function (props) {
  return props.color || props.palette.primary;
}, function (props) {
  return props.variable.radius;
}, function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.variable.padding.m;
}, function (props) {
  return props.variable.button.height;
}, function (props) {
  return props.color || props.palette.primary;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.variable.padding.s;
}, function (props) {
  return props.color || props.palette.primary;
}, function (props) {
  return props.color || props.palette.primary;
}, function (props) {
  return props.color || props.palette.primary;
}, function (props) {
  return props.palette[props.color] || props.palette.primary;
}, function (props) {
  return props.color || props.palette.primary;
});

function Button(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      href = _ref.href,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["disabled", "children", "href", "className", "onClick"]);

  var theme = (0, _index.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var classN = 'button ' + className;

  var buttonClicked =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(loading || disabled)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);

              if (!onClick) {
                _context.next = 7;
                break;
              }

              result = onClick();

              if (!(result instanceof Promise)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", result.then(function (resp) {
                if (!resp) {
                  setLoading(false);
                }
              }));

            case 7:
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function buttonClicked() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (disabled) {
    classN += ' disabled';
  }

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      container: Container,
      className: classN,
      href: disabled || loading ? null : href,
      onClick: buttonClicked
    }, props), children, theme.images.loading_icon && loading &&
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      className: "button-icon",
      name: theme.images.loading_icon
    }))
  );
}

var _default = Button;
exports.default = _default;