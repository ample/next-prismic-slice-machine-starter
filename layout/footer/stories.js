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

const Template = (args) => <Footer {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = { ...fixtures }
