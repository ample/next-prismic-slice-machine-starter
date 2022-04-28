const alt =
  'alt text helps screen-reading tools describe images to visually impaired readers';
const src =
  'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80';

// ---------------------------------------------------------

const layoutIsNotFill = {
  alt: alt,
  height: 670,
  src: src,
  width: 1004,
};

// ---------------------------------------------------------

export default {
  componentProps: {
    ...layoutIsNotFill,
  },
  layoutIsFill: {
    alt: alt,
    layout: 'fill',
    objectFit: 'contain',
    src: src,
  },
  layoutIsFixed: {
    layout: 'fixed',
    ...layoutIsNotFill,
  },
  layoutIsIntrinsic: {
    ...layoutIsNotFill,
  },
  layoutIsResponsive: {
    layout: 'responsive',
    ...layoutIsNotFill,
  },
  withLink: {
    ...layoutIsNotFill,
    url: 'https://www.helloample.com/',
  },
  withSVG: {
    src: '/storybook/ample-logo.svg',
  },
};
