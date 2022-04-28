import React from 'react';

// ---------------------------------------------------------

import { component as Link, fixtures } from '.';

// ---------------------------------------------------------

export default {
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Link />` component handles internal and external URLs automatically and should be used to manage links across the site.',
      },
    },
  },
  title: 'Components/Link',
};

const Template = (args) => <Link {...args} />;

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = { ...fixtures.componentProps };

export const external = Template.bind({});
external.args = { ...fixtures.external };
external.parameters = {
  docs: {
    description: {
      story: 'Links that start with `https://` will open in new tab.',
    },
  },
};

export const internal = Template.bind({});
internal.args = { ...fixtures.internal };
