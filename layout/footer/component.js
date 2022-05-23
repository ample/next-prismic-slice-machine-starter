// ---------------------------------------------------------

import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { footer } from './styles.module.scss'

// ---------------------------------------------------------

const Footer = (props) => {
  let { navigationLinks } = props

  return (
    <footer className={footer}>
      <hr />
      <Link url="/">Logo goes here</Link>

      <nav>
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
    </footer>
  )
}

// ---------------------------------------------------------

Footer.propTypes = {
  /**
   * Specifies global navigation links.
   */
  navigationLinks: PropTypes.array,
}

Footer.defaultProps = {}

export default Footer
