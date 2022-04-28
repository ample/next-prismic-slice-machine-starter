import React from 'react';
import PropTypes from 'prop-types';

// ---------------------------------------------------------

import { footer } from './styles.module.scss';

// ---------------------------------------------------------

const Footer = (props) => {
  let { heading } = props;

  return (
    <footer className={footer}>
      <hr />
      {heading}
    </footer>
  );
};

Footer.propTypes = {
  /**
   * Specifies the heading
   */
  heading: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
