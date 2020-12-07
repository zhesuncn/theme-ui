"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TagInput;

var _react = _interopRequireWildcard(require("react"));

var _Field = _interopRequireDefault(require("./Field"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _Text = require("./Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultContainer = _styledComponents.default.div(_templateObject());

function TagInput(_ref) {
  var label = _ref.label,
      error = _ref.error,
      className = _ref.className,
      direction = _ref.direction,
      values = _ref.values,
      onChanged = _ref.onChanged,
      onInputChanged = _ref.onInputChanged,
      onInputBlur = _ref.onInputBlur,
      onTagDelete = _ref.onTagDelete,
      onTagClick = _ref.onTagClick,
      checkEnd = _ref.checkEnd,
      props = _objectWithoutProperties(_ref, ["label", "error", "className", "direction", "values", "onChanged", "onInputChanged", "onInputBlur", "onTagDelete", "onTagClick", "checkEnd"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var classN = className || '';
  classN += error ? ' error' : current ? ' validate' : '';

  var deleteTag = function deleteTag(v, index) {
    if (onChanged) {
      var list = _toConsumableArray(values);

      list.splice(index, 1);
      onChanged && onChanged(list);
    }

    onTagDelete && onTagDelete(v);
  };

  var inputChanged = function inputChanged(ev) {
    var raw = ev.target.value;
    onInputChanged && onInputChanged(raw);

    if (raw.trim()) {
      if (checkToAddTag(raw)) {
        var list = values ? [].concat(_toConsumableArray(values), [raw.trim()]) : [raw.trim()];
        onChanged && onChanged(list);
        console.log(list);
        setCurrent('');
      } else {
        setCurrent(raw);
      }
    }
  };

  var onKeyPress = function onKeyPress(ev) {};

  var inputFocus = function inputFocus(ev) {};

  var checkToAddTag = function checkToAddTag(text) {
    if (checkEnd) {
      return checkEnd(text);
    }

    return text.match(/.*\s$/g);
  };

  var inputBlur = function inputBlur() {
    if (current) {
      var list = values ? [].concat(_toConsumableArray(values), [current]) : [current];
      onChanged && onChanged(list);
      console.log(list);
      setCurrent('');
    }

    onInputBlur && onInputBlur();
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_Field.default, {
      label: label,
      direction: direction,
      className: classN
    },
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, _extends({
      name: "tag_input",
      defaultContainer: defaultContainer
    }, props), values && values.length > 0 &&
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: 'tags'
    }, values.map(function (v, index) {
      if (index !== values) {
        return (
          /*#__PURE__*/
          _react.default.createElement(_Text.Tag, {
            key: index,
            onClick: function onClick() {
              return onTagClick(v, index);
            },
            onClose: function onClose() {
              return deleteTag(v, index);
            }
          }, v)
        );
      }

      return null;
    })),
    /*#__PURE__*/
    _react.default.createElement("input", {
      value: current,
      onChange: inputChanged,
      onBlur: inputBlur
    })))
  );
}