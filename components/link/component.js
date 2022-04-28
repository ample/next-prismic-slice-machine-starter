import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// ---------------------------------------------------------

const Link = (props) => {
  let { activeClassName, children, className, title, url } = props;

  // ---------------------------------------------------------

  const currentPath = useRouter().pathname === url;
  const externalUrl = url.match(/^http/);

  // ---------------------------------------------------------

  const classes = classNames({
    [activeClassName]: !externalUrl && currentPath,
    [className]: className,
  });

  // ---------------------------------------------------------

  let linkComponent = (
    <NextLink href={url}>
      <a aria-label={title} className={classes} title={title}>
        {children}
      </a>
    </NextLink>
  );

  if (externalUrl) {
    linkComponent = (
      <a
        aria-label={title}
        className={classes}
        href={url}
        rel="noreferrer"
        target="_blank"
        title={title}
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
   * Specifies the content that's rendered inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Specifies additional information about the link, this will also populate the aria-label.
   */
  title: PropTypes.string,

  /**
   * Specifies where to link.
   */
  url: PropTypes.string.isRequired,
};

Link.defaultProps = {};

export default Link;
