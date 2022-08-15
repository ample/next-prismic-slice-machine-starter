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

const Template = (arguments_) => <Card {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = fixtures._props
_properties.parameters = {
  chromatic: { disableSnapshot: true },
}

export const themeDefault = Template.bind({})
themeDefault.args = fixtures.themeDefault

export const themeWithButton = Template.bind({})
themeWithButton.args = fixtures.themeWithButton
