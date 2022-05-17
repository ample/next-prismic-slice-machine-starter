// ---------------------------------------------------------

import { fixtures, component as Footer } from '.'

// ---------------------------------------------------------

export default {
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Global Footer Navigation with Social Nav',
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
