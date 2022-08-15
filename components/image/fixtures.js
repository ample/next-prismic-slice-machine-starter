// ---------------------------------------------------------

const alt =
  'alt text helps screen-reading tools describe images to visually impaired readers'
const source =
  'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

// ---------------------------------------------------------

const defaultImageProperties = {
  alt: alt,
  height: 670,
  layout: 'intrinsic',
  src: source,
  width: 1004,
}

// ---------------------------------------------------------

export default {
  _props: {
    ...defaultImageProperties,
  },
  layoutIsFill: {
    alt: alt,
    layout: 'fill',
    objectFit: 'contain',
    src: source,
  },
  layoutIsFixed: {
    ...defaultImageProperties,
    layout: 'fixed',
  },
  layoutIsIntrinsic: {
    ...defaultImageProperties,
  },
  layoutIsResponsive: {
    ...defaultImageProperties,
    layout: 'responsive',
  },
  withLink: {
    ...defaultImageProperties,
    url: 'https://www.ample.co',
  },
  withSVG: {
    alt: alt,
    src: '/storybook/ample-logo.svg',
  },
}
