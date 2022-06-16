// ---------------------------------------------------------

import SVG from '.'

// ---------------------------------------------------------

import fixtures from '../fixtures'

// ---------------------------------------------------------

export default {
  component: SVG,
  parameters: {
    docs: {
      description: {
        component:
          '<p>When a `.svg` is passed into the `<Image />` component its injected into the DOM using `react-svg`.</p><p>This component can also be imported separately with `import SVG from "@components/image/svg"`</p>',
      },
    },
  },
  title: 'Components/Image/SVG',
}

// ---------------------------------------------------------

const Template = (args) => {
  return <SVG {...args} />
}

// ---------------------------------------------------------

export const svg = Template.bind({})
svg.args = fixtures.withSVG
svg.storyName = 'SVG'
