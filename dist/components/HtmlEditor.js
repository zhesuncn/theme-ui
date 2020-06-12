"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtml = exports.createState = exports.default = void 0;

var _draftJs = require("draft-js");

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

require("./react-draft-wysiwyg.css");

var _react = _interopRequireWildcard(require("react"));

var _draftjsToHtml = _interopRequireDefault(require("draftjs-to-html"));

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

var createState = function createState(html) {
  var blocks = (0, _draftJs.convertFromHTML)(html || '');

  var initstate = _draftJs.ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);

  return _draftJs.EditorState.createWithContent(initstate);
};

exports.createState = createState;

var getHtml = function getHtml(state) {
  var raw = (0, _draftJs.convertToRaw)(state.getCurrentContent());
  return (0, _draftjsToHtml.default)(raw);
};

exports.getHtml = getHtml;

var HtmlEditor = function HtmlEditor(props) {
  var initValue = props.initValue,
      onValueChanged = props.onValueChanged,
      state = props.state,
      onStateChanged = props.onStateChanged,
      otherProps = _objectWithoutProperties(props, ["initValue", "onValueChanged", "state", "onStateChanged"]);

  var _useState = (0, _react.useState)(_draftJs.EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  (0, _react.useEffect)(function () {
    if (initValue) {
      var defaultEditorState = createState(initValue);
      setEditorState(defaultEditorState);
    }
  }, [initValue]);

  var onEditorStateChange = function onEditorStateChange(s) {
    onValueChanged && onValueChanged(getHtml(s));
    !state && setEditorState(s);
    onStateChanged && onStateChanged(s);
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_reactDraftWysiwyg.Editor, _extends({
      editorState: state || editorState,
      onEditorStateChange: onEditorStateChange
    }, otherProps))
  );
};

var _default = HtmlEditor;
exports.default = _default;