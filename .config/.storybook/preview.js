import React, { Suspense } from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { themes } from '@storybook/theming';

// ---------------------------------------------------------

import { customViewports } from './custom-viewports';

// ---------------------------------------------------------

import './storybook.scss';
import '../../styles/libs/sanitize.scss';
import '../../styles/global-styles.scss';

// ---------------------------------------------------------

// Storybook addon for redirecting console output into action logger panel
setConsoleOptions({
  panelExclude: [],
});

addDecorator((story) => <>{story()}</>);

// ---------------------------------------------------------

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { sort: 'alpha', expanded: true },
  backgrounds: {
    default: 'light',
    grid: {
      disable: true,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};
