// ---------------------------------------------------------

import path from 'path'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'

// ---------------------------------------------------------

import Link from '@components/link'
import NextImage from './next'
import SVG from './svg'

// ---------------------------------------------------------

export const defaultAltAttribute = (image) => {
  const filename = path.basename(image, path.extname(image))
  return startCase(filename)
}

// ---------------------------------------------------------

const Image = (props) => {
  if (!props.src) return null

  // -------------------------------------------------------

  let { src, url } = props

  // -------------------------------------------------------

  const imageExtension = (image) => {
    const extension = path.extname(image)
    return extension
  }

  const isSVG = imageExtension(src) === '.svg'

  // -------------------------------------------------------

  let image

  if (isSVG) {
    image = <SVG {...props} />
  } else {
    image = <NextImage {...props} />
  }

  // ---------------------------------------------------------

  let imageComponent

  if (url) {
    imageComponent = <Link url={url}>{image}</Link>
  } else {
    imageComponent = image
  }

  return imageComponent
}

Image.propTypes = {
  /**
   * Specifies the image src.
   */
  src: PropTypes.string.isRequired,

  /**
   * Specifies where to link.
   */
  url: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

Image.defaultProps = {}

export default Image
