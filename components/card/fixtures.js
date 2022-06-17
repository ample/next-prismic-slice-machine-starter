// ---------------------------------------------------------

const card = {
  body: [
    {
      spans: [],
      text: 'Est proident adipisicing reprehenderit in occaecat non. Aute enim minim labore nisi ullamco enim sint Lorem excepteur exercitation anim tempor ad minim ut. Sunt enim aliqua elit occaecat.',
      type: 'paragraph',
    },
  ],
  heading: [{ spans: [], text: 'Utilize B2B networks', type: 'heading3' }],
  image: {
    alt: 'Placeholder image',
    copyright: null,
    dimensions: { height: 500, width: 900 },
    url: 'https://images.prismic.io/ample-prismic-demo/8d1d6aee-977a-458f-8380-d8bbfa88f00f_wexor-tmg-L-2p8fapOA8-unsplash.jpg?auto=compress,format',
  },
  textAlignment: 'left',
  url: { link_type: 'Web', url: 'http://twitter.com' },
  variation: 'withButton',
}

const buttonLabel = {
  buttonLabel: [
    {
      spans: [],
      text: 'Et excepteur et est et velit est magna id ad id.',
      type: 'paragraph',
    },
  ],
}

// ---------------------------------------------------------

export default {
  _props: {
    ...card,
    ...buttonLabel,
  },
  themeDefault: {
    ...card,
    variation: 'default',
  },
  themeWithButton: {
    ...card,
    ...buttonLabel,
  },
}
