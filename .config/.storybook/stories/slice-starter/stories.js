// ---------------------------------------------------------

import SliceName from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: SliceName,
  argTypes: {
    // remove slice properties from the UI
    nameOfProp: {
      table: {
        disable: true,
      },
    },
    variation: {
      table: {
        disable: true,
      },
    },
  },
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

export const variationOption = Template.bind({})
variationOption.args = fixtures.variationOption
variationOption.parameters = {
  chromatic: { disableSnapshot: true },
  docs: {
    description: {
      story: 'Optional description: this variation changes the text to orange.',
    },
  },
  storyshots: { disable: true },
}
