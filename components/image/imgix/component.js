// ---------------------------------------------------------

import classNames from 'classnames'
import Imgix, { buildURL } from 'react-imgix'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import { defaultAltAttribute } from '../component'

// ---------------------------------------------------------

import { imgix_image } from './styles.module.scss'

// ---------------------------------------------------------

const ImgixImage = (props) => {
  if (!props.src) return null

  // -------------------------------------------------------

  let { alt, className, height, htmlAttributes, src, width } = props

  // -------------------------------------------------------

  const classes = classNames(imgix_image, {
    [className]: className,
  })

  // -------------------------------------------------------

  let imgixSrc = buildURL(src, { h: height, w: width })

  // -------------------------------------------------------

  return (
    <div className={classes}>
      <Imgix
        alt={alt || defaultAltAttribute(src) || ' '}
        height={height}
        htmlAttributes={{ alt: alt, ...htmlAttributes }}
        imgixParams={{ fit: 'crop' }}
        sizes="320, 400, 480, 600, 720, 840, 960, 1040, 1140, 1280, 1440, 1600, 1920, 2560, 3360"
        src={imgixSrc}
        width={width}
      />
    </div>
  )
}

ImgixImage.propTypes = {
  /**
   * Specifies the image alt text.
   */
  alt: PropTypes.string,

  /**
   * Specifies a CSS class on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * Specifies the height of the image.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies HTML attributes to add to the image.
   */
  htmlAttributes: PropTypes.object,

  /**
   * Specifies imgIX params to add to the image src.
   */
  imgixParams: PropTypes.object,

  /**
   * Specifies the image src.
   */
  src: PropTypes.string.isRequired,

  /**
   * Specifies the width of the image.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

ImgixImage.defaultProps = {}

export default ImgixImage
