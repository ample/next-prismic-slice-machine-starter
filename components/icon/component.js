import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

// ---------------------------------------------------------

const Icon = (props) => {
  let { className, name } = props;

  return (
    <ReactSVG
      className={className}
      src={`/icons/icon-${name}.svg`}
      wrapper="span"
    />
  );
};

Icon.propTypes = {
  /**
   * Specifies a CSS class on the wrapping element of the SVG.
   */
  className: PropTypes.string,

  /**
   * Specifies the name of icon
   */
  name: PropTypes.string,
};

Icon.defaultProps = {};

export default Icon;
