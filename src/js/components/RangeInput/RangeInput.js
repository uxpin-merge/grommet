import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { withFocus, withForwardRef } from '../hocs';

import { StyledRangeInput } from './StyledRangeInput';

class RangeInput extends Component {
  render() {
    const { forwardRef, ...rest } = this.props;
    return <StyledRangeInput {...rest} ref={forwardRef} type="range" />;
  }
}
let RangeInputDoc;
if (process.env.NODE_ENV !== 'production') {
  RangeInputDoc = require('./doc').doc(RangeInput); // eslint-disable-line global-require
}
const RangeInputWrapper = compose(
  withFocus(),
  withForwardRef,
)(RangeInputDoc || RangeInput);

export { RangeInputWrapper as RangeInput };

/* PropTypes for UXPin Merge */
RangeInput.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  step: PropTypes.number,
  value: PropTypes.string,
};

/* Export default for UXPin Merge */
export default RangeInput;
