'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('./style/button.less');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props, context) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props, context));

    _this.getBtnClass = function () {
      var _this$props = _this.props,
          color = _this$props.color,
          disabled = _this$props.disabled,
          radius = _this$props.radius,
          block = _this$props.block,
          clickedColor = _this$props.clickedColor;

      var config = {
        default: true,
        radius: radius,
        disabled: disabled,
        block: block
      };

      if (color) {
        config = Object.assign(config, _defineProperty({}, 'bg-' + color, true));
      }

      if (clickedColor) {
        config = Object.assign(config, _defineProperty({}, 'clicked-' + clickedColor, true));
      }

      return (0, _classnames2.default)(config);
    };

    _this.getWrapperClass = function () {
      var _this$props2 = _this.props,
          block = _this$props2.block,
          fixed = _this$props2.fixed,
          full = _this$props2.full;

      var config = _defineProperty({
        full: full,
        'btn-wrapper': true
      }, 'btn-wrapper' + (block ? '-block' : ''), true);

      if (fixed) {
        config = Object.assign(config, _defineProperty({}, 'fixed-' + fixed, true));
      }

      return (0, _classnames2.default)(config);
    };

    _this.getStyleObj = function () {
      var _this$props3 = _this.props,
          height = _this$props3.height,
          width = _this$props3.width;

      var styleObj = {};

      if (height) {
        styleObj = Object.assign(styleObj, {
          height: height / 100 + 'rem',
          width: width / 100 + 'rem'
          // lineHeight: `${height / 100}rem`
        });
      }

      return styleObj;
    };

    _this.handleClick = function (e) {
      _this.props.onClick && _this.props.onClick(e);
    };

    _this.state = {};
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          text = _props.text,
          maskColor = _props.maskColor,
          className = _props.className;


      return _react2.default.createElement(
        'section',
        { styleName: this.getWrapperClass(), style: this.getStyleObj(), className: className },
        _react2.default.createElement(
          'button',
          { styleName: this.getBtnClass(), disabled: disabled, onClick: this.handleClick },
          this.props.children || text
        ),
        maskColor && _react2.default.createElement('div', { styleName: 'mask-' + maskColor })
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _react.PropTypes.node,
  text: _react.PropTypes.string, //button中的文字
  fixed: _react.PropTypes.string, //fix定位的位置
  size: _react.PropTypes.string, //按钮大小 'lg'
  color: _react.PropTypes.string, //按钮颜色(样式中同时定义字体以及背景颜色)
  full: _react.PropTypes.bool, //是否宽度百分百
  radius: _react.PropTypes.bool, //是否是圆角样式
  disabled: _react.PropTypes.bool, //是否禁用
  block: _react.PropTypes.bool, //是否独占一行
  height: _react.PropTypes.string, //重新定义高度
  width: _react.PropTypes.string, //重新定义宽度
  clickedColor: _react.PropTypes.string, //点击后的button颜色
  onClick: _react.PropTypes.func, //点击触发事件,
  maskColor: _react.PropTypes.string, //button的遮罩层颜色,
  className: _react.PropTypes.string //外部传入的样式
};

exports.default = (0, _reactCssModules2.default)(Button, _button2.default, {
  allowMultiple: true
});