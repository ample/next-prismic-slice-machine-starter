// ---------------------------------------------------------

import SectionForDemo from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  argTypes: {
    description: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    variation: {
      table: {
        disable: true,
      },
    },
  },
  component: SectionForDemo,
  title: 'Slices/Section For Demo',
}

// ---------------------------------------------------------

const Template = (args) => <SectionForDemo {...args} />

// ---------------------------------------------------------

export const _default = Template.bind({})
_default.args = fixtures._default
_default.parameters = {
  chromatic: { disableSnapshot: true },
}

export const withoutHeader = Template.bind({})
withoutHeader.args = fixtures.withoutHeader
withoutHeader.parameters = {
  chromatic: { disableSnapshot: true },
}
