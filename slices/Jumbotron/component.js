// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Image from '@components/image'

// ---------------------------------------------------------

import { jumbotron, jumbotron_content } from './styles.module.scss'

// ---------------------------------------------------------

const Jumbotron = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let { body, heading, image } = slice

  return (
    <section className={jumbotron}>
      {image && (
        <Image
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          src={`${image.url}&auto=compress,enhance,format&w=1400&h=500&fit=crop&lossless=true`}
          priority
        />
      )}

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
