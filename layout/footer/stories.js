// ---------------------------------------------------------

import Footer from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Global Footer and Navigation',
      },
    },
  },
  title: 'Layout/Footer',
}

// ---------------------------------------------------------

const Template = (arguments_) => <Footer {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = { ...fixtures }
