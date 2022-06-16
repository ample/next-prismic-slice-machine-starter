// ---------------------------------------------------------

const alt =
  'alt text helps screen-reading tools describe images to visually impaired readers'
const src =
  'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

// ---------------------------------------------------------

const defaultNextImageProps = {
  alt: alt,
  height: 670,
  layout: 'intrinsic',
  src: src,
  width: 1004,
}

// ---------------------------------------------------------

export default {
  _imgixProps: {
    alt: alt,
    height: 170,
    src: 'https://images.prismic.io/ample-prismic-demo/eeea263a-1fa1-43a6-b4c7-c1a35ec9a7fc_fpo-background-image.jpg?auto=compress,format',
    width: 1004,
  },
  _props: {
    ...defaultNextImageProps,
  },
  layoutIsFill: {
    alt: alt,
    layout: 'fill',
    objectFit: 'contain',
    src: src,
  },
  layoutIsFixed: {
    ...defaultNextImageProps,
    layout: 'fixed',
  },
  layoutIsIntrinsic: {
    ...defaultNextImageProps,
  },
  layoutIsResponsive: {
    ...defaultNextImageProps,
    layout: 'responsive',
  },
  withLink: {
    ...defaultNextImageProps,
    url: 'https://www.ample.co',
  },
  withSVG: {
    alt: alt,
    src: '/storybook/ample-logo.svg',
  },
}
