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

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style/index.css');
var defaultPrefix = 'cefc-button';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getBtnClass = function () {
      var _config;

      var _this$props = _this.props,
          color = _this$props.color,
          disabled = _this$props.disabled,
          radius = _this$props.radius,
          block = _this$props.block,
          clickedColor = _this$props.clickedColor,
          prefix = _this$props.prefix,
          fixed = _this$props.fixed;

      var config = (_config = {}, _defineProperty(_config, '' + prefix, true), _defineProperty(_config, prefix + '-default', true), _defineProperty(_config, prefix + '-radius', radius), _defineProperty(_config, prefix + '-disabled', disabled), _defineProperty(_config, prefix + '-block', block), _config);

      if (color) {
        config = Object.assign(config, _defineProperty({}, prefix + '-bg-' + color, true));
      }

      if (fixed) {
        config = Object.assign(config, _defineProperty({}, prefix + '-fixed-' + fixed, true));
      }

      if (clickedColor) {
        config = Object.assign(config, _defineProperty({}, prefix + '-clicked-' + clickedColor, true));
      }

      return (0, _classnames2.default)(config);
    }, _this.getStyleObj = function () {
      var _this$props2 = _this.props,
          height = _this$props2.height,
          width = _this$props2.width,
          style = _this$props2.style;

      var styleObj = Object.assign({}, style);

      width && (styleObj.width = width / 100 + 'rem');
      height && (styleObj.height = height / 100 + 'rem');

      return styleObj;
    }, _this.handleClick = function (e) {
      _this.props.onClick && _this.props.onClick(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          text = _props.text;


      return _react2.default.createElement(
        'button',
        { style: this.getStyleObj(), className: this.getBtnClass(), disabled: disabled, onClick: this.handleClick },
        this.props.children || text
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  prefix: _propTypes2.default.string,
  children: _propTypes2.default.node,
  text: _propTypes2.default.string, //button中的文字
  fixed: _propTypes2.default.string, //fix定位的位置
  color: _propTypes2.default.string, //按钮颜色(样式中同时定义字体以及背景颜色)
  radius: _propTypes2.default.bool, //是否是圆角样式
  disabled: _propTypes2.default.bool, //是否禁用
  block: _propTypes2.default.bool, //是否独占一行
  height: _propTypes2.default.string, //重新定义高度
  width: _propTypes2.default.string, //重新定义宽度
  clickedColor: _propTypes2.default.string, //点击后的button颜色
  onClick: _propTypes2.default.func, //点击触发事件,
  maskColor: _propTypes2.default.string, //button的遮罩层颜色,
  className: _propTypes2.default.string, //外部传入的样式
  style: _propTypes2.default.string //外部传入的style
};
Button.defaultProps = {
  prefix: defaultPrefix
};


Button.Group = _ButtonGroup2.default;
exports.default = Button;