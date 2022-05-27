// ---------------------------------------------------------

import SectionForDemo from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: SectionForDemo,
  title: 'Slices/Section For Demo',
}

// ---------------------------------------------------------

const Template = (args) => <SectionForDemo {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
  storyshots: { disable: true },
}
