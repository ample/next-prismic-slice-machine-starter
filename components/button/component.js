import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// ---------------------------------------------------------

import Icon from '@components/icon';
import Link from '@components/link';

// ---------------------------------------------------------

import {
  button,
  theme_arrow,
  theme_default,
  theme_outline,
} from './styles.module.scss';

const themeOptions = {
  arrow: theme_arrow,
  default: theme_default,
  outline: theme_outline,
};

// ---------------------------------------------------------

const Button = (props) => {
  let { className, children, disabled, onClick, theme, title, type, url } =
    props;

  // -------------------------------------------------------

  const classes = classNames(button, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme],
  });

  // -------------------------------------------------------

  const buttonContents = (
    <>
      {children}
      {theme === 'arrow' && <Icon name="arrow-right" />}
    </>
  );

  let buttonComponent = (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {buttonContents}
    </button>
  );

  if (url) {
    buttonComponent = (
      <Link className={classes} title={title} url={url}>
        {buttonContents}
      </Link>
    );
  }

  return buttonComponent;
};

// ---------------------------------------------------------

Button.propTypes = {
  /**
   * Specifies the content that's rendered inside the button.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Specifies if the button is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specifies a click function and renders a `<button>` element.
   */
  onClick: PropTypes.func,

  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),

  /**
   * Specifies additional information about the button.
   */
  title: PropTypes.string,

  /**
   * Specifies the type attribute and renders a `<button>` element.
   */
  type: PropTypes.oneOf(['submit', 'button']),

  /**
   * Specifies where to link.
   */
  url: PropTypes.string,
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;
