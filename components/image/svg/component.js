// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

// ---------------------------------------------------------

const SVG = (props) => {
  let { alt, className, src } = props

  return (
    <ReactSVG
      aria-label={alt}
      beforeInjection={(src) => {
        const titleElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title'
        )
        titleElement.innerHTML = alt
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

SVG.propTypes = {
  /**
   * Specifies a arial-label and title for the svg
   */
  alt: PropTypes.string,

  /**
   * Specifies the SVG src
   */
  src: PropTypes.string,
}

SVG.defaultProps = {}

export default SVG
