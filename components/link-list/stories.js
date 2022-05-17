// ---------------------------------------------------------

import { fixtures, component as LinkList } from '.'

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
