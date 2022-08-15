// ---------------------------------------------------------

import LinkList from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: LinkList,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  title: 'Components/LinkList',
}

// ---------------------------------------------------------

const Template = (arguments_) => <LinkList {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = { ...fixtures._props }
