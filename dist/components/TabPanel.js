"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = exports.TabItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabItem = function TabItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "active", "disabled", "onClick"]);

  var classN = 'tab-item';

  if (active) {
    classN += ' active';
  }

  if (disabled) {
    classN += ' disabled';
  }

  return _react.default.createElement(_ThemeComponent.default, _extends({
    name: 'tabpanel.tabitem',
    className: classN,
    onClick: onClick
  }, props), children);
};

exports.TabItem = TabItem;

var TabPanel = function TabPanel(_ref2) {
  var defaultIndex = _ref2.defaultIndex,
      onTabChanged = _ref2.onTabChanged,
      children = _ref2.children,
      style = _ref2.style,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["defaultIndex", "onTabChanged", "children", "style", "theme"]);

  var _useState = (0, _react.useState)(defaultIndex ? defaultIndex : 0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      component = _useState4[0],
      setComponent = _useState4[1];

  var history = (0, _reactRouter.useHistory)();
  var location = (0, _reactRouter.useLocation)();
  return _react.default.createElement(_ThemeComponent.default, {
    name: "tabpanel",
    className: "tab-items",
    style: style,
    theme: theme
  }, _react.default.Children.map(children, function (child, index) {
    var isActive = index === active;

    if (isActive && location && child.props.path && location.pathname !== child.props.path) {
      history.push(child.props.path);
    }

    return _react.default.cloneElement(child, {
      theme: theme,
      active: isActive,
      key: index,
      onClick: function onClick() {
        setActive(index);
        onTabChanged && onTabChanged(child.props.path, index);

        if (history && child.props.path) {
          history.push(child.props.path);
        }

        if (child.props.component) {
          setComponent(child.props.component);
        }
      }
    });
  }), component && _react.default.createElement(component, props));
};

exports.TabPanel = TabPanel;