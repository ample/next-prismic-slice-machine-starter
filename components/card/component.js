// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { asImageSrc } from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Button from '@components/button'
import Image from '@components/image'
import Link from '@components/link'

// ---------------------------------------------------------

import {
  card,
  card_content,
  card_image,
  text_alignment_center,
  text_alignment_left,
  text_alignment_right,
  theme_default,
  theme_with_button,
} from './styles.module.scss'

const alignmentOptions = {
  center: text_alignment_center,
  left: text_alignment_left,
  right: text_alignment_right,
}

const variationOptions = {
  default: theme_default,
  withButton: theme_with_button,
}

// ---------------------------------------------------------

const Card = (properties) => {
  let { body, buttonLabel, heading, image, textAlignment, url, variation } =
    properties
  let {
    alt,
    dimensions: { height, width },
  } = image

  // -------------------------------------------------------

  let button = buttonLabel && buttonLabel[0] ? buttonLabel[0].text : undefined

  // -------------------------------------------------------

  const containsButton = button !== undefined
  const undefinedVariation = variation === undefined

  if (undefinedVariation && containsButton) variation = 'withButton'
  if (undefinedVariation) variation = 'default'

  // -------------------------------------------------------

  const classes = classNames(card, {
    [alignmentOptions[textAlignment]]: alignmentOptions[textAlignment],
    [variationOptions[variation]]: variationOptions[variation],
  })

  // -------------------------------------------------------

  const imgixSource = asImageSrc(image, {
    auto: 'compress,enhance,format',
    fit: 'crop',
    h: height,
    lossless: true,
    w: width,
  })

  const blurDataUrl = asImageSrc(image, {
    auto: 'compress,format',
    fit: 'crop',
    h: 10,
    w: 10,
  })

  // -------------------------------------------------------

  let cardContents = (
    <>
      {image && (
        <Image
          alt={alt}
          blurDataURL={blurDataUrl}
          className={card_image}
          height={height}
          layout="responsive"
          placeholder="blur"
          src={imgixSource}
          width={width}
        />
      )}

      <div className={card_content}>
        <PrismicRichText field={heading} />
        <PrismicRichText field={body} />
        {button && <Button>{button}</Button>}
      </div>
    </>
  )

  // -------------------------------------------------------

  let cardComponent = (
    <Link className={classes} url={url}>
      {cardContents}
    </Link>
  )

  if (url.link_type === 'Any') {
    cardComponent = <div className={classes}>{cardContents}</div>
  }

  return cardComponent
}

// ---------------------------------------------------------

Card.propTypes = {
  /**
   * Specifies the content that is displayed under the heading.
   */
  body: PropTypes.array,

  /**
   * Specifies the label of an optional button
   */
  buttonLabel: PropTypes.array,

  /**
   * Specifies the heading.
   */
  heading: PropTypes.array,

  /**
   * Specifies the image src, alt text, and dimensions.
   */
  image: PropTypes.object,

  /**
   * Specifies the alignment of the content.
   */
  textAlignment: PropTypes.oneOf(Object.keys(alignmentOptions)),

  /**
   * Specifies the url if the whole card is clickable.
   */
  url: PropTypes.object,

  /**
   * Specifies the theme variation.
   */
  variation: PropTypes.oneOf(Object.keys(variationOptions)),
}

Card.defaultProps = {
  textAlignment: 'left',
  url: undefined,
}

export default Card
