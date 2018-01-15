'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import csn from 'classnames';
import ButtonGroup from './ButtonGroup';
require('./style/index.less');
const defaultPrefix = 'cefc-button';

class Button extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.string,                           //button中的文字
    fixed: PropTypes.string,                          //fix定位的位置
    color: PropTypes.string,                          //按钮颜色(样式中同时定义字体以及背景颜色)
    radius: PropTypes.bool,                           //是否是圆角样式
    disabled: PropTypes.bool,                         //是否禁用
    block: PropTypes.bool,                            //是否独占一行
    height: PropTypes.string,                         //重新定义高度
    width: PropTypes.string,                          //重新定义宽度
    clickedColor: PropTypes.string,                   //点击后的button颜色
    onClick: PropTypes.func,                          //点击触发事件,
    maskColor: PropTypes.string,                      //button的遮罩层颜色,
    className: PropTypes.string,                      //外部传入的样式
    style: PropTypes.string,                          //外部传入的style
  }

  static defaultProps = {
    prefix: defaultPrefix
  }

  getBtnClass = () => {
    const { color, disabled, radius, block, clickedColor, prefix, fixed } = this.props;
    let config = {
      [`${prefix}`]: true,
      [`${prefix}-default`]: true,
      [`${prefix}-radius`]: radius,
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-block`]: block,
    };

    if (color) {
      config = Object.assign(config, {
        [`${prefix}-bg-${color}`]: true,
      });
    }

    if (fixed) {
      config = Object.assign(config, {
        [`${prefix}-fixed-${fixed}`]: true,
      });
    }

    if (clickedColor) {
      config = Object.assign(config, {
        [`${prefix}-clicked-${clickedColor}`]: true,
      });
    }

    return csn(config);
  }

  getStyleObj = () => {
    let { height, width, style } = this.props;
    let styleObj = Object.assign({}, style);

    width && (styleObj.width = `${width / 100}rem`);
    height && (styleObj.height = `${height / 100}rem`);

    return styleObj;
  }

  handleClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    const { disabled, text } = this.props;

    return (
      <button style={this.getStyleObj()} className={this.getBtnClass()} disabled={disabled} onClick={this.handleClick}>
        {this.props.children || text}
      </button>
    )
  }
}

Button.Group = ButtonGroup;
export default Button;
