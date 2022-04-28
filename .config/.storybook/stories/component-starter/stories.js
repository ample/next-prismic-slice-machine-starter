import React from 'react';

// ---------------------------------------------------------

import { component as ComponentName, fixtures } from '.';

// ---------------------------------------------------------

export default {
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component:
          '<div style="color: black;">**This starter component can be copied from _`.config/.storybook/stories/component-starter`_**.</div> The `<ComponentName />`... add a brief description of the component or remove it.',
      },
    },
  },
  title: 'Documentation/Component Starter',
};

const Template = (args) => <ComponentName {...args} />;

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = fixtures.componentProps;

export const themeOption = Template.bind({});
themeOption.args = fixtures.themeOption;
themeOption.parameters = {
  docs: {
    description: {
      story: 'Optional description: this theme changes the text to orange.',
    },
  },
};
