import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

// ---------------------------------------------------------

const SVGs = ({ className, src }) => {
  return <ReactSVG className={className} src={src} wrapper="span" />;
};

SVGs.propTypes = {
  /**
   * Specifies the SVG src
   */
  src: PropTypes.string,
};

SVGs.defaultProps = {};

export default SVGs;
