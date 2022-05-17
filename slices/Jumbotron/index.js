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
  let { body, image } = slice

  return (
    <section className={jumbotron}>
      {image && (
        <Image
          alt={image.alt}
          layout="responsive"
          src={image.url}
          {...image.dimensions}
        />
      )}

      <div className={jumbotron_content}>
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
