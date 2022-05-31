// ---------------------------------------------------------

import Jumbotron from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

import '@slices/storybook.scss'

// ---------------------------------------------------------

export default {
  component: Jumbotron,
  title: 'Slices/Jumbotron',
}

// ---------------------------------------------------------

const Template = (args) => <Jumbotron {...args} />

// ---------------------------------------------------------

export const _default = Template.bind({})
_default.args = fixtures._default
_default.parameters = {
  chromatic: { disableSnapshot: true },
}
