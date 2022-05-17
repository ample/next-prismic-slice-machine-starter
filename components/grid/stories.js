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

const Template = (args) => <Grid {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
}
