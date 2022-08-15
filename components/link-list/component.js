// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { link_list } from './styles.module.scss'

// ---------------------------------------------------------

const LinkList = (properties) => {
  let { activeClassName, className, links = [] } = properties

  // -------------------------------------------------------

  const classes = classNames(link_list, {
    [className]: className,
  })

  // -------------------------------------------------------

  return (
    <ul className={classes}>
      {links.map((item, key) => {
        return (
          <li key={key}>
            <Link
              activeClassName={activeClassName}
              className={item.className}
              title={item.title}
              url={item.url}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

// ---------------------------------------------------------

LinkList.propTypes = {
  /**
   * Specifies an active class.
   */
  activeClassName: PropTypes.string,

  /**
   * Specifies an array of links.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ),
}

LinkList.defaultProps = {}

export default LinkList
