import React from 'react';

// ---------------------------------------------------------

import { component as Button, fixtures } from '.';

// ---------------------------------------------------------

export default {
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The <Button /> component has predefined themes and either renders as an `<a>` or `<button>` tag depending on the props that are used.',
      },
    },
  },
  title: 'Components/Button',
};

const Template = (args) => <Button {...args} />;

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = fixtures.componentProps;

export const themeArrow = Template.bind({});
themeArrow.args = fixtures.themeArrow;

export const themeDefault = Template.bind({});
themeDefault.args = fixtures.themeDefault;

export const themeOutline = Template.bind({});
themeOutline.args = fixtures.themeOutline;

export const withButtonElement = Template.bind({});
withButtonElement.args = fixtures.withButtonElement;

export const withButtonElementDisabled = Template.bind({});
withButtonElementDisabled.args = fixtures.withButtonElementDisabled;
