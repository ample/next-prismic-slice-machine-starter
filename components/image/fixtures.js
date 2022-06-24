// ---------------------------------------------------------

const alt =
  'alt text helps screen-reading tools describe images to visually impaired readers'
const src =
  'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

// ---------------------------------------------------------

const defaultImageProps = {
  alt: alt,
  height: 670,
  layout: 'intrinsic',
  src: src,
  width: 1004,
}

// ---------------------------------------------------------

export default {
  _props: {
    ...defaultImageProps,
  },
  layoutIsFill: {
    alt: alt,
    layout: 'fill',
    objectFit: 'contain',
    src: src,
  },
  layoutIsFixed: {
    ...defaultImageProps,
    layout: 'fixed',
  },
  layoutIsIntrinsic: {
    ...defaultImageProps,
  },
  layoutIsResponsive: {
    ...defaultImageProps,
    layout: 'responsive',
  },
  withLink: {
    ...defaultImageProps,
    url: 'https://www.ample.co',
  },
  withSVG: {
    alt: alt,
    src: '/storybook/ample-logo.svg',
  },
}
