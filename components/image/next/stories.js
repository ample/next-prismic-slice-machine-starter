// ---------------------------------------------------------

import NextImage from '.'

// ---------------------------------------------------------

import fixtures from '../fixtures'

// ---------------------------------------------------------

export default {
  component: NextImage,
  parameters: {
    docs: {
      description: {
        component:
          '<p>If a raster image is passed to the `<Image />` component, it will be optimized using NextImage. Use the `asImageSrc` Prismic helper along with the rendering API to customize image URLs. See the `<Card />` component as a reference.</p><p>API references:<ul><li><a href="https://nextjs.org/docs/api-reference/next/image">next/image</a></li><li><a href="https://docs.imgix.com/apis/rendering">imgIX Rendering API</a></li></ul></p>',
      },
    },
  },
  title: 'Components/Image/NextImage',
}

// ---------------------------------------------------------

const Template = (arguments_) => {
  let layout = arguments_.layout

  const layoutFill = {
    height: 800,
    position: 'relative',
    width: 1000,
  }

  return (
    <div style={layout === 'fill' ? layoutFill : undefined}>
      <NextImage {...arguments_} />
    </div>
  )
}

// ---------------------------------------------------------

export const _properties = Template.bind({})
_properties.args = fixtures._props
_properties.parameters = {
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
layoutIsFill.storyName = 'layout="fill"'

export const layoutIsFixed = Template.bind({})
layoutIsFixed.args = fixtures.layoutIsFixed
layoutIsFixed.parameters = {
  docs: {
    description: { story: 'Sized to width and height exactly.' },
  },
}
layoutIsFixed.storyName = 'layout="fixed"'

export const layoutIsIntrinsic = Template.bind({})
layoutIsIntrinsic.args = fixtures.layoutIsIntrinsic
layoutIsIntrinsic.parameters = {
  docs: {
    description: {
      story: 'Scale down to fit width of container, up to image size.',
    },
  },
}
layoutIsIntrinsic.storyName = 'layout="intrinsic"'

export const layoutIsResponsive = Template.bind({})
layoutIsResponsive.args = fixtures.layoutIsResponsive
layoutIsResponsive.parameters = {
  docs: {
    description: { story: 'Scale to fit width of container.' },
  },
}
layoutIsResponsive.storyName = 'layout="responsive"'
