// ---------------------------------------------------------

import Jumbotron from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  argTypes: {
    body: {
      table: {
        disable: true,
      },
    },
    image: {
      table: {
        disable: true,
      },
    },
  },
  component: Jumbotron,
  title: 'Slices/Jumbotron',
}

// ---------------------------------------------------------

const Template = (arguments_) => <Jumbotron {...arguments_} />

// ---------------------------------------------------------

export const _default = Template.bind({})
_default.args = fixtures._default
