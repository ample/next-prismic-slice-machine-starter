// ---------------------------------------------------------

import { fixtures, component as Grid } from '.'

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
