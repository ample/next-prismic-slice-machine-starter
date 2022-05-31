// ---------------------------------------------------------

import classNames from 'classnames'
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

const themeOptions = {
  default: theme_default,
  withoutHeader: theme_withoutHeader,
}

// ---------------------------------------------------------

const SectionForDemo = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let { description, title } = slice

  // -------------------------------------------------------

  let cards = props.slice ? props.slice.items : props.items
  let variation = props.slice ? props.slice.variation : props.variation

  // -------------------------------------------------------

  let cardVariation = 'default'
  if (variation === 'withoutHeader') cardVariation = 'withButton'

  // ---------------------------------------------------------

  const classes = classNames(section_for_demo, {
    [themeOptions[variation]]: themeOptions[variation],
  })

  // -------------------------------------------------------

  return (
    <Container className={classes} spacing="large" width="full">
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
      <Grid>
        {cards.map((card, key) => {
          return <Card key={key} variation={cardVariation} {...card} />
        })}
      </Grid>
    </Container>
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
  variation: PropTypes.oneOf(Object.keys(themeOptions)),
}

SectionForDemo.defaultProps = {}

export default SectionForDemo
