import React from 'react';

import { component as Footer, fixtures } from '.';

export default {
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Global Footer Navigation with Social Nav',
      },
    },
  },
  title: 'Layout/Footer',
};

const Template = (args) => <Footer {...args} />;

export const componentProps = Template.bind({});
componentProps.args = { ...fixtures };
