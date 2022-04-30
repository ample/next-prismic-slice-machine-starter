import React from 'react';

// ---------------------------------------------------------

import { component as Card, fixtures } from '.';

// ---------------------------------------------------------

export default {
  component: Card,
  title: 'Slices/Card',
};

// ---------------------------------------------------------

const Template = (args) => <Card {...args} />;

// ---------------------------------------------------------

export const _props = Template.bind({});
_props.args = fixtures._props;

export const variationDefault = Template.bind({});
variationDefault.args = fixtures.themeDefault;

export const variationWithButton = Template.bind({});
variationWithButton.args = fixtures.themeWithButton;
