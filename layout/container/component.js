// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Image from '@components/image'

// ---------------------------------------------------------

import {
  container,
  container_background_image,
  container_content,
  has_background_image,
  text_alignment_center,
  text_alignment_right,
  theme_one,
  theme_two,
  width_fixed,
  width_fluid,
} from './styles.module.scss'

// ---------------------------------------------------------

const textAlignmentOptions = {
  center: text_alignment_center,
  left: null,
  right: text_alignment_right,
}

const themeOptions = {
  none: null,
  'theme-one': theme_one,
  'theme-two': theme_two,
}

const widthOptions = {
  fixed: width_fixed,
  fluid: width_fluid,
  full: null,
}

// ---------------------------------------------------------

const Container = (props) => {
  let { backgroundImage, children, className, textAlignment, theme, width } =
    props

  // -------------------------------------------------------

  const classes = classNames(container, {
    [className]: className,
    [has_background_image]: backgroundImage,
    [textAlignmentOptions[textAlignment]]: textAlignmentOptions[textAlignment],
    [widthOptions[width]]: widthOptions[width],
    [themeOptions[theme]]: [themeOptions[theme]],
  })

  // -------------------------------------------------------

  return (
    <div className={classes}>
      {backgroundImage && (
        <Image
          alt={backgroundImage.alt}
          className={container_background_image}
          layout="responsive"
          src={backgroundImage.url}
          {...backgroundImage.dimensions}
        />
      )}

      <div className={container_content}>{children}</div>
    </div>
  )
}

// ---------------------------------------------------------

Container.propTypes = {
  /**
   * Specifies the background image src, alt text, and dimensions.
   */
  backgroundImage: PropTypes.object,

  /**
   * Specifies the content of the container.
   */
  children: PropTypes.node,

  /**
   * Specifies the alignment of the container's text.
   */
  textAlignment: PropTypes.oneOf(Object.keys(textAlignmentOptions)),

  /**
   * Specifies the theme, which can control several container properties. e.g., background color, padding, etc.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),

  /**
   * Specifies if the container’s content should be fixed or full width.
   */
  width: PropTypes.oneOf(Object.keys(widthOptions)),
}

Container.defaultProps = {
  textAlignment: 'left',
  theme: 'none',
  width: 'fluid',
}

export default Container
