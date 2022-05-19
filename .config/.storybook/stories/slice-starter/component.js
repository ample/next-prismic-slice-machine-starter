// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { slice_name, theme_type } from './styles.module.scss'

const themeOptions = {
  'theme-option': theme_type,
}

// ---------------------------------------------------------

const SliceName = (props) => {
  let { className, nameOfProp, theme } = props

  // -------------------------------------------------------

  const classes = classNames(slice_name, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme],
  })

  // -------------------------------------------------------

  return (
    <Link className={classes} url="url">
      <h2>{nameOfProp}</h2>
    </Link>
  )
}

// ---------------------------------------------------------

SliceName.propTypes = {
  /**
   * Specifies a brief description of the "nameOfProp"
   */
  nameOfProp: PropTypes.string,

  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
}

SliceName.defaultProps = {}

export default SliceName
