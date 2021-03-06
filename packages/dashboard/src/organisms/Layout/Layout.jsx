import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LayoutFrame from '../../atoms/LayoutFrame';

class Layout extends PureComponent {
  static propTypes = {
    boxed: PropTypes.bool,
    fixed: PropTypes.array,
    children: PropTypes.any,
  }
  static defaultProps = {
    boxed: false,
    fixed: null,
    children: null,
  }
  render() {
    const {
      children,
      boxed,
      fixed,
    } = this.props;
    return (
      <LayoutFrame boxed={boxed} fixed={fixed}>
        {children}
      </LayoutFrame>
    );
  }
}

export default Layout;
