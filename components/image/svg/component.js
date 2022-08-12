// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

// ---------------------------------------------------------

import { defaultAltAttribute } from '../component'

// ---------------------------------------------------------

const SVG = (props) => {
  let { alt, className, src } = props

  // -------------------------------------------------------

  const title = alt || defaultAltAttribute(src)

  // -------------------------------------------------------

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
