const buttonProps = {
  children: 'Call to action',
  theme: 'arrow',
  url: '#',
};

// ---------------------------------------------------------

export default {
  _props: {
    ...buttonProps,
  },
  themeArrow: {
    ...buttonProps,
  },
  themeDefault: {
    ...buttonProps,
    theme: 'default',
  },
  themeOutline: {
    ...buttonProps,
    theme: 'outline',
  },
  withButtonElement: {
    ...buttonProps,
    theme: 'default',
    type: 'button',
    url: null,
  },
  withButtonElementDisabled: {
    ...buttonProps,
    disabled: true,
    theme: 'default',
    type: 'button',
    url: null,
  },
};
