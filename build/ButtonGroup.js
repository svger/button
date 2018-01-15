'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style/index.css');
var defaultPrefix = 'cefc-button';

var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call.apply(_ref, [this].concat(args))), _this), _this.getWrapperCls = function () {
      var _csn;

      var _this$props = _this.props,
          prefix = _this$props.prefix,
          justify = _this$props.justify,
          vertical = _this$props.vertical;


      return (0, _classnames2.default)((_csn = {}, _defineProperty(_csn, prefix + '-group-justify', justify), _defineProperty(_csn, prefix + '-group-vertical', vertical), _csn));
    }, _this.getBtnStyle = function () {
      var _this$props2 = _this.props,
          justify = _this$props2.justify,
          children = _this$props2.children;

      var btnLen = children.length;
      var styleObj = {};

      justify && (styleObj.width = 100 / btnLen + '%');

      return styleObj;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.getWrapperCls() },
        this.props.children.map(function (node, index) {
          return _react2.default.cloneElement(node, { style: _this2.getBtnStyle(), key: 'btnGroup-' + index });
        })
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = {
  prefix: _propTypes2.default.string,
  justify: _propTypes2.default.bool, //是否自适应宽度
  vertical: _propTypes2.default.bool, //是否垂直排列
  children: _propTypes2.default.node.isRequired
};
ButtonGroup.defaultProps = {
  prefix: defaultPrefix
};
exports.default = ButtonGroup;