// ---------------------------------------------------------

import Image from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

export default {
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Image />` component optimizes and renders raster or vector graphics and handles if the image is a link.',
      },
    },
  },
  title: 'Components/Image',
}

// ---------------------------------------------------------

const Template = (args) => {
  let layout = args.layout

  const layoutFill = {
    height: 800,
    position: 'relative',
    width: 1000,
  }

  return (
    <div style={layout === 'fill' ? layoutFill : undefined}>
      <Image {...args} />
    </div>
  )
}

// ---------------------------------------------------------

export const Props = Template.bind({})
Props.args = fixtures._props
Props.parameters = {
  chromatic: { disableSnapshot: true },
}

// Variations
// ---------------------------------------------------------

export const layoutIsFill = Template.bind({})
layoutIsFill.args = {
  ...fixtures.layoutIsFill,
}
layoutIsFill.parameters = {
  docs: {
    description: {
      story:
        'Grow in both X and Y axes to fill the parent container. To render correctly, the parent should be set to `position: ”relative”` with a width and height.',
    },
  },
}
layoutIsFill.storyName = 'NextImage, layout="fill"'

export const layoutIsFixed = Template.bind({})
layoutIsFixed.args = fixtures.layoutIsFixed
layoutIsFixed.parameters = {
  docs: {
    description: { story: 'Sized to width and height exactly.' },
  },
}
layoutIsFixed.storyName = 'NextImage, layout="fixed"'

export const layoutIsIntrinsic = Template.bind({})
layoutIsIntrinsic.args = fixtures.layoutIsIntrinsic
layoutIsIntrinsic.parameters = {
  docs: {
    description: {
      story: 'Scale down to fit width of container, up to image size.',
    },
  },
}
layoutIsIntrinsic.storyName = 'NextImage, layout="intrinsic"'

export const layoutIsResponsive = Template.bind({})
layoutIsResponsive.args = fixtures.layoutIsResponsive
layoutIsResponsive.parameters = {
  docs: {
    description: { story: 'Scale to fit width of container.' },
  },
}
layoutIsResponsive.storyName = 'NextImage, layout="responsive"'

export const withLink = Template.bind({})
withLink.args = fixtures.withLink
withLink.parameters = {
  docs: {
    description: {
      story: 'If a `url` is passed, the image will be wrapped with a `<a>`.',
    },
  },
}

export const svg = Template.bind({})
svg.args = fixtures.withSVG
svg.parameters = {
  docs: {
    description: {
      story:
        'If a .svg is passed into the Image component the SVG is injected into the DOM using `react-svg`.',
    },
  },
}
svg.storyName = 'SVG'
