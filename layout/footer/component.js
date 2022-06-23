// ---------------------------------------------------------

import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { footer, footer_content } from './styles.module.scss'

// ---------------------------------------------------------

const Footer = (props) => {
  let { navigationLinks } = props

  return (
    <LazyLoad offset={200} once>
      <footer className={footer}>
        <div className={footer_content}>
          <Link url="/">Logo</Link>

          <nav aria-label="Footer">
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
      </footer>
    </LazyLoad>
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
