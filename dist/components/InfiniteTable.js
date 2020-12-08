"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteTable = InfiniteTable;
exports.Header = exports.Line = exports.Cell = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    height: 40px;\n    width: 100%;\n    color: ", ";\n    font-weight: bold;\n    > div:first-child {\n      padding-left: ", ";\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin: ", " 0;\n  background-color: ", ";\n  min-height: 39px;\n  > div:first-child {\n    padding-left: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  align-items: center;\n  justify-content: flex-start;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n  color: ", ";\n  font-weight: bold;\n  > svg {\n    fill: ", ";\n    margin-right: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    > .table {\n      height: calc(100% - 40px);\n      overflow-y: auto;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Table = _styledComponents.default.div(_templateObject());

var LoaderContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.variable.padding.xs;
}, function (props) {
  return props.palette.blue_dark;
}, function (props) {
  return props.palette.blue_dark;
}, function (props) {
  return props.variable.padding.m;
});

function InfiniteTable(_ref) {
  var values = _ref.values,
      onLoad = _ref.onLoad,
      cols = _ref.cols,
      hasMore = _ref.hasMore,
      children = _ref.children,
      id = _ref.id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["values", "onLoad", "cols", "hasMore", "children", "id", "className"]);

  var targetId = (id ? '-' : '') + 'table';
  var theme = (0, _index.useTheme)();
  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      container: Table,
      className: "infinite-table " + className
    },
    /*#__PURE__*/
    _react.default.createElement(Header, {
      cols: cols
    }),
    /*#__PURE__*/
    _react.default.createElement("div", {
      id: targetId,
      className: "table"
    },
    /*#__PURE__*/
    _react.default.createElement(_reactInfiniteScrollComponent.default, {
      dataLength: values ? values.length : 0,
      next: onLoad,
      hasMore: hasMore,
      loader:
      /*#__PURE__*/
      _react.default.createElement(_ThemeComponent.default, {
        className: "infinitetable-loader",
        key: 0,
        container: LoaderContainer
      },
      /*#__PURE__*/
      _react.default.createElement(_Icon.default, {
        name: theme.images.loading_icon
      }), " Chargement en cours ..."),
      scrollableTarget: targetId
    }, values && values.map(function (v, i) {
      return (
        /*#__PURE__*/
        _react.default.createElement(Line, {
          key: v ? v.id || v._id || i : i,
          item: v,
          cols: cols
        })
      );
    }))))
  );
}

var Cell = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.width ? "width: ".concat(props.width, ";") : '';
}, function (props) {
  return props.flex || !props.width ? "flex: ".concat(props.flex || 1, ";") : '';
});

exports.Cell = Cell;

var LineContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.variable.padding.xs;
}, function (props) {
  return props.palette.white;
}, function (props) {
  return props.variable.padding.m;
});

var Line = function Line(_ref2) {
  var item = _ref2.item,
      cols = _ref2.cols,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["item", "cols", "theme"]);

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      container: LineContainer,
      className: "row"
    }, cols.map(function (col, i) {
      return (
        /*#__PURE__*/
        _react.default.createElement(Cell, {
          key: i,
          className: 'item' + col.key ? '-' + col.key : '',
          width: col.width
        }, col.render ? col.render(item) : col.key && item ? item[col.key] : null)
      );
    }))
  );
};

exports.Line = Line;

var HeaderContainer = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.palette.primary;
}, function (props) {
  return props.variable.padding.m;
});

var Header = function Header(_ref3) {
  var cols = _ref3.cols,
      theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["cols", "theme"]);

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      container: HeaderContainer,
      className: "table-header"
    }, cols.map(function (col, i) {
      return (
        /*#__PURE__*/
        _react.default.createElement(Cell, {
          key: i,
          className: "header-item",
          width: col.width
        }, col.header || '')
      );
    }))
  );
};

exports.Header = Header;