import React from 'react';

// ---------------------------------------------------------

import { component as Image, fixtures } from '.';

export default {
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Image />` component optimizes and renders either raster or vector graphics and handles if the image is a link.',
      },
    },
  },
  title: 'Components/Image',
};

// ---------------------------------------------------------

const Template = (args) => {
  let layout = args.layout;

  return (
    <div
      style={{
        height: layout === 'fill' ? 800 : undefined,
        position: layout === 'fill' ? 'relative' : undefined,
        width: layout === 'fill' ? 1000 : undefined,
      }}
    >
      <Image {...args} />
    </div>
  );
};

// ---------------------------------------------------------

export const componentProps = Template.bind({});
componentProps.args = fixtures.componentProps;

export const layoutIsFill = Template.bind({});
layoutIsFill.args = {
  ...fixtures.layoutIsFill,
};
layoutIsFill.parameters = {
  docs: {
    description: {
      story:
        'Grow in both X and Y axes to fill the parent container. To render correctly, the parent should be set to `position: ”relative”` with a width and height.',
    },
  },
};

export const layoutIsFixed = Template.bind({});
layoutIsFixed.args = fixtures.layoutIsFixed;
layoutIsFixed.parameters = {
  docs: {
    description: { story: 'Sized to width and height exactly.' },
  },
};

export const layoutIsIntrinsic = Template.bind({});
layoutIsIntrinsic.args = fixtures.layoutIsIntrinsic;
layoutIsIntrinsic.parameters = {
  docs: {
    description: {
      story: 'Scale down to fit width of container, up to image size.',
    },
  },
};

export const layoutIsResponsive = Template.bind({});
layoutIsResponsive.args = fixtures.layoutIsResponsive;
layoutIsResponsive.parameters = {
  docs: {
    description: { story: 'Scale to fit width of container.' },
  },
};

export const withLink = Template.bind({});
withLink.args = fixtures.withLink;

export const withSVG = Template.bind({});
withSVG.args = fixtures.withSVG;
withSVG.parameters = {
  docs: {
    description: {
      story:
        'If a .svg is passed into the Image component the SVG is injected into the DOM using react-svg.',
    },
  },
};
