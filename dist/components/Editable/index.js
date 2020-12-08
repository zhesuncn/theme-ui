"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _ThemeContext = require("../../ThemeContext");

var _DefaultEditionContainer = _interopRequireDefault(require("./DefaultEditionContainer"));

var _lodash = require("lodash");

var _Field = _interopRequireDefault(require("../Field"));

var _ThemeComponent = _interopRequireDefault(require("../ThemeComponent"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n .btns {\n    display: inline-flex;\n  }\n  .btns svg, .btns img{\n    margin-right: 10px;\n    width: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var Editable = function Editable(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      value = _ref.value,
      _ref$defaultEdition = _ref.defaultEdition,
      defaultEdition = _ref$defaultEdition === void 0 ? false : _ref$defaultEdition,
      onChanged = _ref.onChanged,
      onDelete = _ref.onDelete,
      editRender = _ref.editRender,
      label = _ref.label,
      direction = _ref.direction,
      onCancel = _ref.onCancel,
      children = _ref.children,
      editContainerOptions = _ref.editContainerOptions,
      editComponent = _ref.editComponent,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "value", "defaultEdition", "onChanged", "onDelete", "editRender", "label", "direction", "onCancel", "children", "editContainerOptions", "editComponent", "component"]);

  var _useState = (0, _react.useState)(defaultEdition),
      _useState2 = _slicedToArray(_useState, 2),
      edition = _useState2[0],
      setEdition = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      currentValue = _useState4[0],
      setCurrentValue = _useState4[1];

  var _useState5 = (0, _react.useState)(value),
      _useState6 = _slicedToArray(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  var theme = (0, _ThemeContext.useTheme)();

  var reset = function reset() {
    if (value) {
      //Set props.value to currentValue
      setCurrentValue(value);
    }

    setCurrent(currentValue);
  };

  (0, _react.useEffect)(function () {
    reset();
  }, [value]);
  var editionMode = null;

  if (edition) {
    var editProps = {
      value: current,
      onChanged: function onChanged(v) {
        console.log(v);
        setCurrent(v);
      }
    };
    var editContent = editComponent ? _react.default.createElement(editComponent, editProps) : editRender ? editRender(editProps) : null;
    var EditionC = editContainerOptions && editContainerOptions.component ? editContainerOptions.component : _DefaultEditionContainer.default;

    var onEditionConfirm = function onEditionConfirm() {
      setCurrentValue(current);
      onChanged && onChanged(current);
      setEdition(false);
    };

    var onEditionCancel = function onEditionCancel() {
      reset();
      setEdition(false);
      onCancel && onCancel();
    };

    var containerProps = (0, _lodash.get)(editContainerOptions, 'props', {});
    editionMode =
    /*#__PURE__*/
    _react.default.createElement(EditionC, _extends({
      onConfirm: onEditionConfirm,
      onCancel: onEditionCancel,
      label: label
    }, containerProps), editContent);
  }

  var displayComponent = null;

  if (!edition) {
    displayComponent =
    /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null,
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "btns"
    }, onChanged &&
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: theme.images.edit_icon,
      onClick: function onClick() {
        reset();
        setEdition(true);
      }
    }), onDelete &&
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: theme.images.delete_icon,
      onClick: function onClick() {
        onDelete(value);
      }
    })), children, component && _react.default.createElement(component, {
      value: value
    }));
  }

  return (
    /*#__PURE__*/
    _react.default.createElement(_Field.default, {
      label: label,
      direction: direction,
      className: className
    },
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      className: "editable",
      container: Container
    }, props), displayComponent, editionMode))
  );
};

var _default = Editable;
exports.default = _default;