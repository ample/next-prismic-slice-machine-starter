// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

// ---------------------------------------------------------

import { defaultAltAttribute } from '../component'

// ---------------------------------------------------------

const SVG = (properties) => {
  let { alt, className, src } = properties

  // -------------------------------------------------------

  const title = alt || defaultAltAttribute(src)

  // -------------------------------------------------------

  return (
    <ReactSVG
      aria-label={title}
      beforeInjection={(source) => {
        const titleElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title'
        )
        titleElement.innerHTML = title
        source.prepend(titleElement)
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
