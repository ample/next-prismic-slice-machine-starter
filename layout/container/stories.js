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

const Template = (args) => <Container {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
}

export const withBackgroundImage = Template.bind({})
withBackgroundImage.args = fixtures.withBackgroundImage
withBackgroundImage.parameters = {
  chromatic: { disableSnapshot: true },
}
