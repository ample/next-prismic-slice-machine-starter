// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { asImageSrc } from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Image from '@components/image'
import useMediaQuery from '@utilities/use-media-query'

// ---------------------------------------------------------

import { jumbotron, jumbotron_content } from './styles.module.scss'

// ---------------------------------------------------------

const Jumbotron = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let { body, heading, image } = slice
  let {
    alt,
    dimensions: { height, width },
    small: {
      dimensions: { height: mobileHeight, width: mobileWidth },
    },
  } = image

  // -------------------------------------------------------

  const imgixSrc = asImageSrc(image, {
    auto: 'compress,enhance,format',
    fit: 'crop',
    h: height,
    lossless: true,
    w: width,
  })

  const imgixSrcOnMobile = asImageSrc(image, {
    auto: 'compress,enhance,format',
    fit: 'crop',
    h: mobileHeight,
    lossless: true,
    sat: -100,
    w: mobileWidth,
  })

  const blurDataUrl = asImageSrc(image, {
    auto: 'compress,format',
    fit: 'crop',
    h: 10,
    w: 10,
  })

  // -------------------------------------------------------

  const mediaIsMedium = useMediaQuery('(min-width: 1140px)')

  // -------------------------------------------------------

  return (
    <section className={jumbotron}>
      <Image
        alt={alt}
        blurDataURL={blurDataUrl}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={
          !mediaIsMedium
            ? imgixSrcOnMobile
            : mediaIsMedium
            ? imgixSrc
            : undefined
        }
        priority
      />

      <div className={jumbotron_content}>
        {heading && <PrismicRichText field={heading} />}
        {body && <PrismicRichText field={body} />}
      </div>
    </section>
  )
}

// ---------------------------------------------------------

Jumbotron.propTypes = {
  /**
   * Specifies the content of the Jumbotron.
   */
  body: PropTypes.array,

  /**
   * Specifies the image src, alt text, and dimensions.
   */
  image: PropTypes.object,
}

Jumbotron.defaultProps = {}

export default Jumbotron
