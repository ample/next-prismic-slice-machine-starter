// ---------------------------------------------------------

import Container from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Container />` handle the look and feel of sections across the site',
      },
    },
  },
  title: 'Layout/Container',
}

// ---------------------------------------------------------

const Template = (arguments_) => <Container {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = fixtures._props
_properties.parameters = {
  chromatic: { disableSnapshot: true },
}

export const withBackgroundImage = Template.bind({})
withBackgroundImage.args = fixtures.withBackgroundImage
withBackgroundImage.parameters = {
  chromatic: { disableSnapshot: true },
}
