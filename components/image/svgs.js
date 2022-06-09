// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

// ---------------------------------------------------------

const SVGs = (props) => {
  let { className, src, title } = props

  return (
    <ReactSVG
      aria-label={title}
      beforeInjection={(src) => {
        const titleElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title'
        )
        titleElement.innerHTML = title
        src.prepend(titleElement)
      }}
      className={className}
      role="img"
      src={src}
      wrapper="span"
    />
  )
}

// ---------------------------------------------------------

SVGs.propTypes = {
  /**
   * Specifies the SVG src
   */
  src: PropTypes.string,

  /**
   * Specifies a arial-label and title for the svg
   */
  title: PropTypes.string,
}

SVGs.defaultProps = {}

export default SVGs
