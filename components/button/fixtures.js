const buttonProps = {
  children: 'Call to action',
  theme: 'arrow',
  url: '#',
};

// ---------------------------------------------------------

export default {
  componentProps: {
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
