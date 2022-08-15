// ---------------------------------------------------------

// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'

// ---------------------------------------------------------

import Link from '@components/link'
import NextImage from './next'
import SVG from './svg'

// ---------------------------------------------------------

export const defaultAltAttribute = (image) => {
  const filename = image.slice(Math.max(0, image.lastIndexOf('_') + 1))
  const alt = path.basename(filename, path.extname(filename))

  return startCase(alt)
}

// ---------------------------------------------------------

const imageExtension = (image) => {
  const extension = path.extname(image)
  return extension
}

// ---------------------------------------------------------

const Image = (properties) => {
  let { src, url } = properties

  // -------------------------------------------------------

  const isSVG = imageExtension(src) === '.svg'

  // -------------------------------------------------------

  let image = <NextImage {...properties} />

  if (isSVG) {
    image = <SVG {...properties} />
  }

  // ---------------------------------------------------------

  let imageComponent = image

  if (url) {
    imageComponent = <Link url={url}>{image}</Link>
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
