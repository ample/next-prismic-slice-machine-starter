// ---------------------------------------------------------

import path from 'path'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'

// ---------------------------------------------------------

import ImgixImage from './imgix'
import Link from '@components/link'
import NextImage from './next'
import SVG from './svg'

// ---------------------------------------------------------

export const defaultAltAttribute = (image) => {
  const filename = image.substring(image.lastIndexOf('_') + 1)
  const alt = path.basename(filename, path.extname(filename))

  return startCase(alt)
}

// ---------------------------------------------------------

const Image = (props) => {
  let { layout, src, url } = props

  // -------------------------------------------------------

  const imageExtension = (image) => {
    const extension = path.extname(image)
    return extension
  }

  const isSVG = imageExtension(src) === '.svg'

  // -------------------------------------------------------

  let image = <ImgixImage {...props} />

  if (layout) {
    image = <NextImage {...props} />
  }

  if (isSVG) {
    image = <SVG {...props} />
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
   * If the layout is specified, the image component will use NextImage to render the image.
   */
  layout: PropTypes.string,

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
