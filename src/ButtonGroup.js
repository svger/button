import React, { Component } from 'react';
import PropTypes from 'prop-types';
import csn from 'classnames';
require('./style/index.less');
const defaultPrefix = 'cefc-button';

class ButtonGroup extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    justify: PropTypes.bool, //是否自适应宽度
    vertical: PropTypes.bool, //是否垂直排列
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    prefix: defaultPrefix
  }

  getWrapperCls = () => {
    const { prefix, justify, vertical } = this.props;

    return csn({
      [`${prefix}-group-justify`]: justify,
      [`${prefix}-group-vertical`]: vertical
    })
  }

  getBtnStyle = () => {
    const { justify, children } = this.props;
    const btnLen = children.length;
    const styleObj = {};

    justify && (styleObj.width = `${100 / btnLen}%`);

    return styleObj;
  }

  render() {
    return (
      <div className={this.getWrapperCls()}>
        {this.props.children.map((node, index) => {
          return React.cloneElement(node, { style: this.getBtnStyle(), key: `btnGroup-${index}` });
        })}
      </div>
    )
  }
}

export default ButtonGroup;