// ---------------------------------------------------------

const image = {
  alt: 'Placeholder image',
  copyright: null,
  dimensions: {
    height: 500,
    width: 900,
  },
  url: 'https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop',
}

const card = {
  body: [
    {
      spans: [],
      text: 'Tempor voluptate ad cupidatat reprehenderit ea anim qui laboris sint adipisicing duis fugiat.',
      type: 'paragraph',
    },
  ],
  buttonLabel: [
    {
      spans: [],
      text: 'Quis ex consequat.',
      type: 'paragraph',
    },
  ],
  heading: [
    {
      spans: [],
      text: 'Ullamco consectetur elit veniam reprehenderit aliqua et anim culpa mollit quis eiusmod velit labore duis. Laboris nulla proident duis nisi. Anim elit esse Lorem ut laboris commodo commodo aliqua nostrud cupidatat dolore aute occaecat.',
      type: 'paragraph',
    },
  ],
  image: {
    ...image,
  },
  url: {
    link_type: 'Web',
    url: 'https://ample.co',
  },
}

// ---------------------------------------------------------

const slice = {
  items: [
    {
      ...card,
    },
    {
      ...card,
      image: {
        ...image,
        url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop',
      },
    },
    {
      ...card,
      image: {
        ...image,
        url: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop',
      },
    },
  ],
}

export default {
  _default: {
    ...slice,
    description: [
      {
        spans: [],
        text: 'Veniam nulla cillum laboris minim amet duis fugiat. Adipisicing incididunt labore non excepteur est sunt non voluptate ex labore excepteur et anim.',
        type: 'paragraph',
      },
    ],
    title: [
      {
        spans: [],
        text: 'Target magnetic systems',
        type: 'heading1',
      },
    ],
    variation: 'default',
  },
  withoutHeader: {
    variation: 'withoutHeader',
    ...slice,
  },
}
