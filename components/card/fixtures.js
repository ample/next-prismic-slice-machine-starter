// ---------------------------------------------------------

const slice = {
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
    url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&h=500&fit=crop',
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
    ...slice,
    ...buttonLabel,
  },
  themeDefault: {
    ...slice,
    variation: 'default',
  },
  themeWithButton: {
    ...slice,
    ...buttonLabel,
  },
}
