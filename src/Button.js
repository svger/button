'use strict';

import React, { Component, PropTypes } from 'react';
import CSSModule from 'react-css-modules';
import classnames from 'classnames';
import styles from './style/index.less';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    text: PropTypes.string.isRequired,                //button中的文字
    fixed: PropTypes.string,                          //fix定位的位置
    color: PropTypes.string,                          //按钮颜色(样式中同时定义字体以及背景颜色)
    full: PropTypes.bool,                             //是否宽度百分百
    radius: PropTypes.bool,                           //是否是圆角样式
    disabled: PropTypes.bool,                         //是否禁用
    block: PropTypes.bool,                            //是否独占一行
    height: PropTypes.string,                         //重新定义高度
    width: PropTypes.string,                          //重新定义宽度
    clickedColor: PropTypes.string,                   //点击后的button颜色
    onClick: PropTypes.func,                          //点击触发事件,
    maskColor: PropTypes.string,                      //button的遮罩层颜色,
    className: PropTypes.string                       //外部传入的样式
  }

  static defaultProps = {
    color: 'blue',
    full: false,
    radius: false,
    disabled: false,
    block: false,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  getBtnClass = () => {
    let { color, disabled, radius, block, clickedColor } = this.props;
    let config = {
      default: true,
      radius,
      disabled,
      block,
    };

    if (color) {
      config = Object.assign(config, {
        [`bg-${color}`]: true,
      });
    }

    if (clickedColor) {
      config = Object.assign(config, {
        [`clicked-${clickedColor}`]: true,
      });
    }

    return classnames(config);
  }

  getWrapperClass = () => {
    let { block, fixed, full } = this.props;
    let config = {
      full,
      'btn-wrapper': true,
      [`btn-wrapper${block ? '-block' : ''}`]: true,
    };

    if (fixed) {
      config = Object.assign(config, {
        [`fixed-${fixed}`]: true,
      });
    }

    return classnames(config)
  }

  getStyleObj = () => {
    let { height, width } = this.props;
    let styleObj = {};

    if (height) {
      styleObj = Object.assign(styleObj, {
        height: `${height / 100}rem`,
        width: `${width / 100}rem`,
        // lineHeight: `${height / 100}rem`
      });
    }

    return styleObj;
  }

  handleClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    let { disabled, text, maskColor, className } = this.props;

    return (
      <section styleName={this.getWrapperClass()} style={this.getStyleObj()} className={className}>
        <button styleName={this.getBtnClass()} disabled={disabled} onClick={this.handleClick}>
          {this.props.children || text}
        </button>
        { maskColor && <div styleName={`mask-${maskColor}`}></div> }
      </section>
    )
  }
}

export default CSSModule(Button, styles, {
  allowMultiple: true
});
