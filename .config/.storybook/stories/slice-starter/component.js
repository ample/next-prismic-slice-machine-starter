// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Link from '@components/link'

// ---------------------------------------------------------

import { slice_name, variation_option_name } from './styles.module.scss'

const variationOptions = {
  'variation-option': variation_option_name,
}

// ---------------------------------------------------------

const SliceName = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let { nameOfProp } = slice

  // -------------------------------------------------------

  let variation = props.slice ? props.slice.variation : props.variation

  // -------------------------------------------------------

  const classes = classNames(slice_name, {
    [variationOptions[variation]]: variationOptions[variation],
  })

  // -------------------------------------------------------

  return (
    <Link className={classes} url="url">
      <PrismicRichText field={nameOfProp} />
    </Link>
  )
}

// ---------------------------------------------------------

SliceName.propTypes = {
  /**
   * Specifies a brief description of the "nameOfProp"
   */
  nameOfProp: PropTypes.array,

  /**
   * Specifies the theme variation.
   */
  variation: PropTypes.oneOf(Object.keys(variationOptions)),
}

SliceName.defaultProps = {}

export default SliceName
