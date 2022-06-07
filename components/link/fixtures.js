// ---------------------------------------------------------

export default {
  _props: {
    children: 'lorem ipsum',
    url: '/',
  },
  external: {
    ariaLabel: 'This link will open in a new tab.',
    children: 'External link',
    url: {
      link_type: 'Web',
      url: 'https://www.ample.co',
    },
  },
  internal: {
    ariaLabel: 'This link will not open in a new tab.',
    children: 'Internal link',
    url: {
      link_type: 'Document',
      url: '#',
    },
  },
}
