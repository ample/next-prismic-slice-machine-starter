import React from 'react';
import PropTypes from 'prop-types';

// ---------------------------------------------------------

import { header } from './styles.module.scss';

// ---------------------------------------------------------

const Header = (props) => {
  let { heading } = props;

  return (
    <header className={header}>
      {heading}
      <hr />
    </header>
  );
};

Header.propTypes = {
  /**
   * Specifies the heading
   */
  heading: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
