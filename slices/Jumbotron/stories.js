// ---------------------------------------------------------

import Jumbotron, { fixtures } from '.'

// ---------------------------------------------------------

export default {
  component: Jumbotron,
  title: 'Slices/Jumbotron',
}

// ---------------------------------------------------------

const Template = (args) => <Jumbotron {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
}
