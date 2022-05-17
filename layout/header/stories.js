// ---------------------------------------------------------

import { fixtures, component as Header } from '.'

// ---------------------------------------------------------

export default {
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Global Header and Navigation',
      },
    },
  },
  title: 'Layout/Header',
}

// ---------------------------------------------------------

const Template = (args) => <Header {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = { ...fixtures }
