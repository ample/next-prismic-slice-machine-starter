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
  theme_with_heading_and_description,
} from './styles.module.scss'

const themeOptions = {
  'with-heading-and-description': theme_with_heading_and_description,
}

// ---------------------------------------------------------

const SectionForDemo = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let cards = props.slice.items

  let { className, theme } = props
  let { description, title } = slice

  // -------------------------------------------------------

  const classes = classNames(container, {
    [className]: className,
    [themeOptions[theme]]: themeOptions[theme],
  })

  // -------------------------------------------------------

  return (
    <div
      style={{
        backgroundColor:
          props.slice.variation === 'withoutHeader'
            ? 'lightseagreen'
            : 'lightgray',
      }}
    >
      <Container className={classes} spacing="large" width="full">
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <Grid>
          {cards.map((card, key) => {
            return <Card key={key} {...card} />
          })}
        </Grid>
      </Container>
    </div>
  )
}

// ---------------------------------------------------------

SectionForDemo.propTypes = {
  /**
   * Specifies the theme.
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
}

SectionForDemo.defaultProps = {}

export default SectionForDemo
