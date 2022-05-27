// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Container from '@layout/container'
import Grid from '@layout/grid'

// ---------------------------------------------------------

import Card from '@components/card'
import {
  container,
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
  let cards = props.slice.items
  let theme = props.slice.variation

  let { description, title } = slice

  // -------------------------------------------------------

  const classes = classNames(container, {
    [themeOptions[theme]]: themeOptions[theme],
  })

  // -------------------------------------------------------

  return (
    <Container className={classes} spacing="large" width="full">
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
      <Grid>
        {cards.map((card, key) => {
          return <Card key={key} {...card} />
        })}
      </Grid>
    </Container>
  )
}

// ---------------------------------------------------------

SectionForDemo.propTypes = {
  /**
   * Specifies the theme variation.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
}

SectionForDemo.defaultProps = {}

export default SectionForDemo
