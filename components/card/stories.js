// ---------------------------------------------------------

import Card from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ----------------------------------------------------------------------

export default {
  component: Card,
  title: 'Components/Card',
}

// ---------------------------------------------------------

const Template = (args) => <Card {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
}

export const themeDefault = Template.bind({})
themeDefault.args = fixtures.themeDefault

export const themeWithButton = Template.bind({})
themeWithButton.args = fixtures.themeWithButton
