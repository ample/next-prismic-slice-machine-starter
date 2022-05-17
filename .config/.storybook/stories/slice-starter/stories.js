// ---------------------------------------------------------

import SliceName from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: SliceName,
  parameters: {
    docs: {
      description: {
        component:
          '<div style="color: black;">**This starter component can be copied from _`.config/.storybook/stories/slice-starter`_**.</div> <div>The `<SliceName />`...add a brief description of the component or remove it.</div>',
      },
    },
  },
  title: 'Documentation/Starters/Slice Starter',
}

// ---------------------------------------------------------

const Template = (args) => <SliceName {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props
_props.parameters = {
  chromatic: { disableSnapshot: true },
  storyshots: { disable: true },
}

export const themeOption = Template.bind({})
themeOption.args = fixtures.themeOption
themeOption.parameters = {
  chromatic: { disableSnapshot: true },
  docs: {
    description: {
      story: 'Optional description: this theme changes the text to orange.',
    },
  },
  storyshots: { disable: true },
}
