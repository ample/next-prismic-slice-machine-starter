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
          '<p>If a `.svg` is passed into the `<Image />` component it is injected into the DOM using `react-svg`.</p>',
      },
    },
  },
  title: 'Components/Image/SVG',
}

// ---------------------------------------------------------

const Template = (arguments_) => {
  return <SVG {...arguments_} />
}

// ---------------------------------------------------------

export const svg = Template.bind({})
svg.args = fixtures.withSVG
svg.storyName = 'SVG'
