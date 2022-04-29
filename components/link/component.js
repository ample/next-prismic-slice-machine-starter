import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PrismicLink } from '@prismicio/react';
import { useRouter } from 'next/router';

// ---------------------------------------------------------

const Link = (props) => {
  let { activeClassName, children, className, ariaLabel, url } = props;

  // ---------------------------------------------------------

  const currentURL = url;

  // ---------------------------------------------------------

  const currentPath = useRouter().pathname === currentURL;
  const externalUrl = currentURL.match(/^http/);

  // ---------------------------------------------------------

  const classes = classNames({
    [activeClassName]: !externalUrl && currentPath,
    [className]: className,
  });

  // ---------------------------------------------------------

  let linkComponent = (
    <PrismicLink aria-label={ariaLabel} className={classes} href={currentURL}>
      {children}
    </PrismicLink>
  );

  if (externalUrl) {
    linkComponent = (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={currentURL}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return linkComponent;
};

Link.propTypes = {
  /**
   * Specifies an active class name.
   */
  activeClassName: PropTypes.string,

  /**
   * Specifies additional information to describe the link.
   */
  ariaLabel: PropTypes.string,

  /**
   * Specifies the content that's rendered inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Specifies where to link.
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Link.defaultProps = {};

export default Link;
