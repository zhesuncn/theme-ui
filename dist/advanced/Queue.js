"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("../../src/components/Button"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _ThemeComponent = _interopRequireDefault(require("../components/ThemeComponent"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Queue = function Queue(_ref) {
  var queue = _ref.queue,
      onStop = _ref.onStop,
      onFollow = _ref.onFollow,
      defaultOpen = _ref.defaultOpen,
      theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["queue", "onStop", "onFollow", "defaultOpen", "theme", "children"]);

  var _useState = (0, _react.useState)(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.queue);

  var formateDate = function formateDate(date) {
    return (0, _moment.default)(date).format(myTheme.dateFormat || 'DD/MM/YYYY HH:mm:ss');
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      name: "queue"
    }, props, {
      theme: theme
    }),
    /*#__PURE__*/
    _react.default.createElement("div", {
      class: "title"
    }, queue.name),
    /*#__PURE__*/
    _react.default.createElement("div", null, "Started at: ", formateDate(queue.start)),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "status"
    }, "Status:\xA0\xA0",
    /*#__PURE__*/
    _react.default.createElement("span", null, queue.status), queue.status === "RUNNING" &&
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: myTheme.loading_icon
    })),
    /*#__PURE__*/
    _react.default.createElement(_Button.default, {
      size: 150,
      className: "underline",
      color: "text",
      onClick: function onClick() {
        setOpen(!open);
      }
    }, open ? "Hide" : "More..."), open &&
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: 'detail'
    }, queue.events &&
    /*#__PURE__*/
    _react.default.createElement("div", null,
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "sub-title"
    }, "Events"), queue.events.map(function (ev, i) {
      return (
        /*#__PURE__*/
        _react.default.createElement("div", {
          key: i,
          className: "event"
        }, formateDate(ev.date), " : ",
        /*#__PURE__*/
        _react.default.createElement("span", null, ev.name), ev.msg &&
        /*#__PURE__*/
        _react.default.createElement("div", null, ev.msg))
      );
    })), children,
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "actions"
    }, onStop && queue.status !== 'SUCCESS' && queue.status !== 'FAILED' &&
    /*#__PURE__*/
    _react.default.createElement(_Button.default, {
      size: 150,
      className: "clear",
      onClick: onStop
    }, "Stop"), onFollow &&
    /*#__PURE__*/
    _react.default.createElement(_Button.default, {
      size: 150,
      className: "underline",
      color: "text",
      style: {
        marginLeft: '20px'
      },
      onClick: onFollow
    }, "Follow"))))
  );
};

var _default = Queue;
exports.default = _default;