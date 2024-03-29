// ---------------------------------------------------------

import Image from '../'

// ---------------------------------------------------------

import fixtures from '../fixtures'

// ---------------------------------------------------------

export default {
  argTypes: {
    alt: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    height: {
      table: {
        disable: true,
      },
    },
    layout: {
      table: {
        disable: true,
      },
    },
    objectFit: {
      table: {
        disable: true,
      },
    },
    objectPosition: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    priority: {
      table: {
        disable: true,
      },
    },
    quality: {
      table: {
        disable: true,
      },
    },
    src: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
  },
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'If a `url` is passed to the `<Image />` component, it will be wrapped with an `<a>`.',
      },
    },
  },
  title: 'Components/Image/With Link',
}

// ---------------------------------------------------------

const Template = (arguments_) => {
  return <Image {...arguments_} />
}

// ---------------------------------------------------------

export const withLink = Template.bind({})
withLink.args = fixtures.withLink
withLink.parameters = {
  chromatic: { disableSnapshot: true },
}
