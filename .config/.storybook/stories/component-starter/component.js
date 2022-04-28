import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// ---------------------------------------------------------

import Link from '@components/link';

// ---------------------------------------------------------

import { component_name, theme_type } from './styles.module.scss';

const themeOptions = {
  'theme-option': theme_type,
};

// ---------------------------------------------------------

const ComponentName = (props) => {
  let { className, nameOfProp, theme } = props;

  // -------------------------------------------------------

  const classes = classNames(component_name, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme],
  });

  // -------------------------------------------------------

  return (
    <Link className={classes} url="url">
      <h2>{nameOfProp}</h2>
    </Link>
  );
};

// ---------------------------------------------------------

ComponentName.propTypes = {
  /**
   * Specifies a brief description of the "nameOfProp"
   */
  nameOfProp: PropTypes.string,

  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
};

ComponentName.defaultProps = {};

export default ComponentName;
