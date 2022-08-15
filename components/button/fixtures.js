// ---------------------------------------------------------

const buttonProperties = {
  children: 'Call to action',
  theme: 'arrow',
  url: '#',
}

// ---------------------------------------------------------

export default {
  _props: {
    ...buttonProperties,
  },
  themeArrow: {
    ...buttonProperties,
  },
  themeDefault: {
    ...buttonProperties,
    theme: 'default',
  },
  themeOutline: {
    ...buttonProperties,
    theme: 'outline',
  },
  withButtonElement: {
    ...buttonProperties,
    theme: 'default',
    type: 'button',
    url: undefined,
  },
  withButtonElementDisabled: {
    ...buttonProperties,
    disabled: true,
    theme: 'default',
    type: 'button',
    url: undefined,
  },
}
