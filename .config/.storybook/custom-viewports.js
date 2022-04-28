// The customViewports correspond to the media queries in `./utilities/debug-media-queries/styles.module.scss`.
// ---------------------------------------------------------
// ‘Smallest’ in Storybook has been set to 320px, given that it’s the smallest size the project is shooting for.
// ‘x-large-lowest’, ‘x-large’, and ‘x-large-highest’ have not been added since these are not used on most
//  projects and would only be used on templates outside of Storybook.
// ---------------------------------------------------------

export const customViewports = {
  smallest: {
    name: 'smallest',
    styles: {
      width: '320px',
      height: '80vh',
    },
  },
  xSmallLowest: {
    name: 'x-small-lowest',
    styles: {
      width: '360px',
      height: '80vh',
    },
  },
  xSmall: {
    name: 'x-small',
    styles: {
      width: '400px',
      height: '80vh',
    },
  },
  xSmallHighest: {
    name: 'x-small-highest',
    styles: {
      width: '480px',
      height: '80vh',
    },
  },
  smallLowest: {
    name: 'small-lowest',
    styles: {
      width: '600px',
      height: '80vh',
    },
  },
  small: {
    name: 'small',
    styles: {
      width: '720px',
      height: '80vh',
    },
  },
  smallHighest: {
    name: 'small-highest',
    styles: {
      width: '840px',
      height: '80vh',
    },
  },
  mediumLowest: {
    name: 'medium-lowest',
    styles: {
      width: '960px',
      height: '80vh',
    },
  },
  medium: {
    name: 'medium',
    styles: {
      width: '1040px',
      height: '80vh',
    },
  },
  mediumHighest: {
    name: 'medium-highest',
    styles: {
      width: '1140px',
      height: '80vh',
    },
  },
  largeLowest: {
    name: 'large-lowest',
    styles: {
      width: '1280px',
      height: '80vh',
    },
  },
  large: {
    name: 'large',
    styles: {
      width: '1440px',
      height: '80vh',
    },
  },
  largeHighest: {
    name: 'large-highest',
    styles: {
      width: '1600px',
      height: '80vh',
    },
  },
};
