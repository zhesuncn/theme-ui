"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfiniteTable;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _ThemeComponent = _interopRequireDefault(require("./ThemeComponent"));

var _ThemeContext = require("../ThemeContext");

var _util = require("../themes/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  align-items: center;\n  justify-content: flex-start;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function InfiniteTable(_ref) {
  var values = _ref.values,
      onLoad = _ref.onLoad,
      cols = _ref.cols,
      hasMore = _ref.hasMore,
      children = _ref.children,
      id = _ref.id,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["values", "onLoad", "cols", "hasMore", "children", "id", "theme"]);

  var themeContext = (0, _ThemeContext.useTheme)();
  var myTheme = (0, _util.getCurrentTheme)(theme, themeContext.infinitetable);
  var targetId = (id ? '-' : '') + 'table';
  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      className: "infinite-table",
      name: "infinitetable",
      theme: theme
    },
    /*#__PURE__*/
    _react.default.createElement(Header, {
      cols: cols,
      theme: theme
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
        name: "infinitetable.loader",
        key: 0
      },
      /*#__PURE__*/
      _react.default.createElement(_Icon.default, {
        name: myTheme.loading_icon
      }), " Chargement en cours ..."),
      scrollableTarget: targetId
    }, values && values.map(function (v, i) {
      return (
        /*#__PURE__*/
        _react.default.createElement(Line, {
          key: i,
          item: v,
          cols: cols
        })
      );
    }))))
  );
}

var Cell = _styledComponents.default.div(_templateObject(), function (props) {
  return props.width ? "width: ".concat(props.width, ";") : '';
}, function (props) {
  return props.flex || !props.width ? "flex: ".concat(props.flex || 1, ";") : '';
});

var Line = function Line(_ref2) {
  var item = _ref2.item,
      cols = _ref2.cols,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["item", "cols", "theme"]);

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      className: "row",
      theme: theme,
      name: 'infinitetable.line'
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

var Header = function Header(_ref3) {
  var cols = _ref3.cols,
      theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["cols", "theme"]);

  return (
    /*#__PURE__*/
    _react.default.createElement(_ThemeComponent.default, {
      className: "header",
      theme: theme,
      name: 'infinitetable.header'
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