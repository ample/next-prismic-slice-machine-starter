// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PrismicLink } from '@prismicio/react'
import { useRouter } from 'next/router'

// ---------------------------------------------------------

const Link = (props) => {
  let { activeClassName, ariaLabel, children, className, url } = props

  // -------------------------------------------------------

  let currentURL = url.slug ? url.slug : url.url ? url.url : url

  const linkFromPrismic = typeof url === 'object'

  // -------------------------------------------------------

  const currentPath = useRouter().pathname === currentURL

  const externalUrl =
    url.link_type === 'Web' ||
    url.link_type === 'Media' ||
    (!linkFromPrismic && url.match(/^http/))

  // -------------------------------------------------------

  const classes = classNames({
    [activeClassName]: !externalUrl && currentPath,
    [className]: className,
  })

  // -------------------------------------------------------

  let linkComponent

  if (!linkFromPrismic && !externalUrl) {
    linkComponent = (
      <PrismicLink aria-label={ariaLabel} className={classes} href={url}>
        {children}
      </PrismicLink>
    )
  } else if (externalUrl) {
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
    )
  } else if (linkFromPrismic) {
    linkComponent = (
      <PrismicLink aria-label={ariaLabel} className={classes} field={url}>
        {children}
      </PrismicLink>
    )
  }

  return linkComponent
}

// ---------------------------------------------------------

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
}

Link.defaultProps = {}

export default Link
