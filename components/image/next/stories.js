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
          '<p>When a raster image is passed to the `<Image />` component it is optimized with NextImage for improved Performance, visual stability and faster page loads.</p><p>This component can also be imported separately with `import NextImage from "@components/image/next"`</p>',
      },
    },
  },
  title: 'Components/Image/NextImage',
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
      <NextImage {...args} />
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
