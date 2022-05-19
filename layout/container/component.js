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
  spacing_large,
  spacing_medium,
  spacing_small,
  text_alignment_center,
  text_alignment_right,
  theme_one,
  theme_two,
  width_fixed,
  width_fluid,
} from './styles.module.scss'

// ---------------------------------------------------------

const spacingOptions = {
  large: spacing_large,
  medium: spacing_medium,
  none: null,
  small: spacing_small,
}

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
  let {
    backgroundImage,
    children,
    className,
    element: Element,
    spacing,
    textAlignment,
    theme,
    width,
  } = props

  // -------------------------------------------------------

  const classes = classNames(container, {
    [className]: className,
    [has_background_image]: backgroundImage,
    [textAlignmentOptions[textAlignment]]: textAlignmentOptions[textAlignment],
    [themeOptions[theme]]: [themeOptions[theme]],
  })

  const contentClasses = classNames(container_content, {
    [spacingOptions[spacing]]: spacingOptions[spacing],
    [widthOptions[width]]: widthOptions[width],
  })

  // -------------------------------------------------------

  return (
    <Element className={classes}>
      {backgroundImage && (
        <Image
          alt={backgroundImage.alt}
          className={container_background_image}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={backgroundImage.url}
        />
      )}

      <div className={contentClasses}>{children}</div>
    </Element>
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
   * Specifies the HTML element to use as the container's wrapping element.
   */
  element: PropTypes.oneOf(['div', 'footer', 'header', 'section']),

  /**
   * Specifies the space between the content and the container's wrapping element.
   */
  spacing: PropTypes.oneOf(Object.keys(spacingOptions)),

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
  element: 'section',
  spacing: 'none',
  textAlignment: 'left',
  theme: 'none',
  width: 'fluid',
}

export default Container
