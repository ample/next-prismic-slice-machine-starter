// ---------------------------------------------------------

import Link from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Link,
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component:
          'The `<Link />` component handles internal and external URLs automatically and should be used to manage links across the site.',
      },
    },
  },
  title: 'Components/Link',
}

const Template = (arguments_) => <Link {...arguments_} />

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = { ...fixtures._props }

export const external = Template.bind({})
external.args = { ...fixtures.external }
external.parameters = {
  docs: {
    description: {
      story: 'Links that start with `https://` will open in new tab.',
    },
  },
}

export const internal = Template.bind({})
internal.args = { ...fixtures.internal }
