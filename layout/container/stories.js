// ---------------------------------------------------------

import Container from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Container,
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
