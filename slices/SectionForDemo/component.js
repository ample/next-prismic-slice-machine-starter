// ---------------------------------------------------------

import classNames from 'classnames'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Card from '@components/card'
import Container from '@layout/container'
import Grid from '@layout/grid'

// ---------------------------------------------------------

import {
  section_for_demo,
  theme_default,
  theme_withoutHeader,
} from './styles.module.scss'

const variationOptions = {
  default: theme_default,
  withoutHeader: theme_withoutHeader,
}

// ---------------------------------------------------------

const SectionForDemo = (properties) => {
  let slice = properties.slice ? properties.slice.primary : properties
  let { description, title } = slice

  // -------------------------------------------------------

  let cards = properties.slice ? properties.slice.items : properties.items
  let variation = properties.slice
    ? properties.slice.variation
    : properties.variation

  // -------------------------------------------------------

  let cardVariation = 'default'
  if (variation === 'withoutHeader') cardVariation = 'withButton'

  // ---------------------------------------------------------

  const classes = classNames(section_for_demo, {
    [variationOptions[variation]]: variationOptions[variation],
  })

  // -------------------------------------------------------

  return (
    <LazyLoad offset={200} once>
      <Container className={classes} spacing="large" width="fluid">
        {title && (
          <header>
            <PrismicRichText field={title} />
            <PrismicRichText field={description} />
          </header>
        )}
        <Grid>
          {cards.map((card, key) => {
            return <Card key={key} variation={cardVariation} {...card} />
          })}
        </Grid>
      </Container>
    </LazyLoad>
  )
}

// ---------------------------------------------------------

SectionForDemo.propTypes = {
  /**
   * Specifies Repeatable Zone items.
   */
  items: PropTypes.array,
  /**
   * Specifies the theme variation.
   */
  variation: PropTypes.oneOf(Object.keys(variationOptions)),
}

SectionForDemo.defaultProps = {}

export default SectionForDemo
