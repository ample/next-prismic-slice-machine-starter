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

const Template = (args) => <LinkList {...args} />

// ---------------------------------------------------------

export const _Props = Template.bind({})
_Props.args = { ...fixtures._props }
