// ---------------------------------------------------------

import { component as ComponentName, fixtures } from '.'

// ---------------------------------------------------------

export default {
  component: ComponentName,
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component:
          '<div style="color: black;">**This starter component can be copied from _`.config/.storybook/stories/component-starter`_**.</div> <div>The `<ComponentName />`...add a brief description of the component or remove it.</div>',
      },
    },
    storyshots: { disable: true },
  },
  title: 'Documentation/Component Starter',
}

// ---------------------------------------------------------

const Template = (args) => <ComponentName {...args} />

// ---------------------------------------------------------

export const _props = Template.bind({})
_props.args = fixtures._props

export const themeOption = Template.bind({})
themeOption.args = fixtures.themeOption
themeOption.parameters = {
  docs: {
    description: {
      story: 'Optional description: this theme changes the text to orange.',
    },
  },
}
