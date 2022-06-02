// ---------------------------------------------------------

import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { header, header_content } from './styles.module.scss'

// ---------------------------------------------------------

const Header = (props) => {
  let { navigationLinks } = props

  return (
    <header className={header}>
      <div className={header_content}>
        <Link url="/">Logo goes here</Link>

        <nav aria-label="Main">
          <ul>
            {navigationLinks.map((nav) => {
              let label = nav.label[0].text

              return (
                <li key={label}>
                  <Link url={nav.link}>{label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

// ---------------------------------------------------------

Header.propTypes = {
  /**
   * Specifies global navigation links.
   */
  navigationLinks: PropTypes.array,
}

Header.defaultProps = {}

export default Header
