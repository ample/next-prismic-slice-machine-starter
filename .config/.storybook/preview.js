import isChromatic from 'chromatic/isChromatic';
import { setConsoleOptions } from '@storybook/addon-console';

// ---------------------------------------------------------

import { customViewports } from './custom-viewports';

// ---------------------------------------------------------

import './storybook.scss';
import '../../styles/libs/sanitize.scss';
import '../../styles/global-styles.scss';

// ---------------------------------------------------------

// Use the document.fonts API to check if fonts have loaded
const fontLoader = async () => ({
  fonts: await document.fonts.ready,
});

export const loaders = isChromatic() && document.fonts ? [fontLoader] : [];

// ---------------------------------------------------------

// Storybook addon for redirecting console output into action logger panel
setConsoleOptions({
  panelExclude: [],
});

// ---------------------------------------------------------

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    backgrounds: {
      default: 'light',
      grid: {
        disable: true,
      },
    },
    expanded: true,
    hideNoControlsWarning: true,
    sort: 'alpha',
  },
  options: {
    storySort: {
      order: ['Documentation', 'Components', 'Layout', 'Slices'],
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};
