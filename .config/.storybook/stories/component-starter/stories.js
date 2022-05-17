// ---------------------------------------------------------

import { component as ComponentName, fixtures } from '.'

// ---------------------------------------------------------

export default {
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component:
          '<div style="color: black;">**This starter component can be copied from _`.config/.storybook/stories/component-starter`_**.</div> <div>The `<ComponentName />`...add a brief description of the component or remove it.</div>',
      },
    },
  },
  title: 'Documentation/Component Starter',
}

// ---------------------------------------------------------

const Template = (args) => <ComponentName {...args} />

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
