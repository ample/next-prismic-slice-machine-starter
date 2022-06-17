// ---------------------------------------------------------

import classNames from 'classnames'
import Imgix, { buildURL } from 'react-imgix'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

// ---------------------------------------------------------

import { defaultAltAttribute } from '../component'

// ---------------------------------------------------------

import { imgix_image } from './styles.module.scss'

// ---------------------------------------------------------

const ImgixImage = (props) => {
  let { alt, className, height, htmlAttributes, lazyLoad, src, width } = props

  // -------------------------------------------------------

  const [lazyLoadClass, setLazyLoadClass] = useState('')

  useEffect(() => {
    if (lazyLoad) {
      setLazyLoadClass('lazyload')
    }
  }, [lazyLoad])

  // -------------------------------------------------------

  const classes = classNames(imgix_image, {
    [className]: className,
  })

  // -------------------------------------------------------

  let imgixSrc = buildURL(src, {
    auto: 'compress,enhance,format',
    h: height,
    w: width,
  })

  // -------------------------------------------------------

  const imageParams = {
    height: height,
    htmlAttributes: {
      alt: alt || defaultAltAttribute(src),
      ...htmlAttributes,
    },
    imgixParams: { fit: 'crop' },
    sizes:
      '320, 400, 480, 600, 720, 840, 960, 1040, 1140, 1280, 1440, 1600, 1920, 2560, 3360',
    src: imgixSrc,
    width: width,
  }

  // -------------------------------------------------------

  let image = <Imgix {...imageParams} />

  if (lazyLoad) {
    image = (
      <Imgix
        attributeConfig={{
          sizes: 'data-sizes',
          src: 'data-src',
          srcSet: 'data-srcset',
        }}
        className={`${lazyLoadClass}`}
        {...imageParams}
      />
    )
  }

  return <div className={classes}>{image}</div>
}

// -------------------------------------------------------

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
   * Specifies if the image should use lazy loading.
   */
  lazyLoad: PropTypes.bool,

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
