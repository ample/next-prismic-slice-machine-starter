import React from 'react';

// ---------------------------------------------------------

import { component as Header, fixtures } from '.';

// ---------------------------------------------------------

export default {
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Global Header and Navigation',
      },
    },
  },
  title: 'Layout/Header',
};

const Template = (args) => <Header {...args} />;

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = { ...fixtures };
