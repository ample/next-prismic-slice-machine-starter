// ---------------------------------------------------------

import Header from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

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

const Template = (arguments_) => <Header {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = { ...fixtures }
