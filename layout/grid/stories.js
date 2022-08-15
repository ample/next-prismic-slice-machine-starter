// ---------------------------------------------------------

import Grid from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Grid,
  title: 'Layout/Grid',
}

// ---------------------------------------------------------

const Template = (arguments_) => <Grid {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = fixtures._props
_properties.parameters = {
  chromatic: { disableSnapshot: true },
}
