// ---------------------------------------------------------

import path from 'path'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'
import { lazy, Suspense } from 'react'

// ---------------------------------------------------------

const ImgixImage = lazy(() => import('./imgix'))
const Link = lazy(() => import('@components/link'))
const NextImage = lazy(() => import('./next'))
const SVG = lazy(() => import('./svg'))

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

  let image = (
    <Suspense>
      <ImgixImage {...props} />
    </Suspense>
  )

  if (layout) {
    image = (
      <Suspense>
        <NextImage {...props} />
      </Suspense>
    )
  }

  if (isSVG) {
    image = (
      <Suspense>
        <SVG {...props} />
      </Suspense>
    )
  }

  // ---------------------------------------------------------

  let imageComponent = image

  if (url) {
    imageComponent = (
      <Suspense>
        <Link url={url}>{image}</Link>
      </Suspense>
    )
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
