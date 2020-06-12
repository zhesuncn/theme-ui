"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

var _Icon = _interopRequireDefault(require("./Icon"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Field = _interopRequireDefault(require("./Field"));

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

var defaultContainer = _styledComponents.default.div;

var Uploader = function Uploader(_ref) {
  var label = _ref.label,
      onFileUpload = _ref.onFileUpload,
      onFileDelete = _ref.onFileDelete,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      value = _ref.value,
      className = _ref.className,
      style = _ref.style,
      maxSize = _ref.maxSize,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["label", "onFileUpload", "onFileDelete", "onSuccess", "onError", "value", "className", "style", "maxSize", "theme"]);

  // const [error, setError] = useState(null)
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.uploader);
  (0, _react.useEffect)(function () {
    setCurrent(value);
  }, [value]);

  var onDrop =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(acceptedFiles) {
      var file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = acceptedFiles[0];

              if (!(maxSize && file.size > maxSize * 1048576)) {
                _context.next = 4;
                break;
              }

              // setError(`File max size is ${maxSize} mb`)
              onError && onError("File max size is ".concat(maxSize, " mb"));
              return _context.abrupt("return");

            case 4:
              setLoading(true);

              if (!onFileUpload) {
                _context.next = 15;
                break;
              }

              _context.prev = 6;
              _context.next = 9;
              return onFileUpload(file);

            case 9:
              onSuccess && onSuccess();
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](6);
              // setError(e.message)
              onError && onError(_context.t0.message);

            case 15:
              setCurrent(file);
              setLoading(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 12]]);
    }));

    return function onDrop(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return (
    /*#__PURE__*/
    _react.default.createElement(_Field.default, {
      label: label
    },
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      theme: theme,
      name: "uploader",
      defaultContainer: defaultContainer,
      style: style
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "input"
    }, current ?
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: myTheme.validate_icon,
      alt: "success"
    }) : loading ?
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: myTheme.loading_icon,
      alt: "loading"
    }) :
    /*#__PURE__*/
    _react.default.createElement(_reactDropzone.default, {
      onDrop: onDrop
    }, function (_ref3) {
      var getRootProps = _ref3.getRootProps,
          getInputProps = _ref3.getInputProps;
      return (
        /*#__PURE__*/
        _react.default.createElement("div", _extends({}, getRootProps(), {
          className: "btn"
        }),
        /*#__PURE__*/
        _react.default.createElement(_Icon.default, {
          name: myTheme.add_icon,
          alt: "add"
        }), "Ajouter un fichier",
        /*#__PURE__*/
        _react.default.createElement("input", _extends({}, getInputProps(), {
          type: "file"
        }, props, {
          multiple: false
        })))
      );
    })), current &&
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "file_name"
    }, current.name, onFileDelete &&
    /*#__PURE__*/
    _react.default.createElement(_Icon.default, {
      name: myTheme.delete_icon,
      onClick: onFileDelete,
      alt: "delete"
    }))))
  );
};

var _default = Uploader;
exports.default = _default;