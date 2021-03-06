import PropTypes from 'prop-types';
import React from 'react';

import { Inner, Outer } from './ContainerInset.styles';

const ContainerInset = ({ children, ...otherProps }) => (
  <Outer {...otherProps}>
    <Inner>{children}</Inner>
  </Outer>
);

ContainerInset.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerInset;
