// ---------------------------------------------------------

import ImgixImage from '.'

// ---------------------------------------------------------

import fixtures from '../fixtures'

// ---------------------------------------------------------

export default {
  component: ImgixImage,
  parameters: {
    docs: {
      description: {
        component:
          '<p>By default when a raster image is passed to the `<Image />` component, it will be optimized using `react-imgix`.</p><p>Additional resources:<ul><li><a href="https://www.npmjs.com/package/react-imgix">react-imgix</a></li><li><a href="https://docs.imgix.com/apis/rendering">imgIX Rendering API</a></li></ul></p><p>It can also be imported separately with `import ImgixImage from "@components/image/imgix"`</p>',
      },
    },
  },
  title: 'Components/Image/ImgixImage',
}

// ---------------------------------------------------------

const Template = (args) => {
  return <ImgixImage {...args} />
}

// ---------------------------------------------------------

export const Props = Template.bind({})
Props.args = fixtures._imgixProps
Props.parameters = {
  chromatic: { disableSnapshot: true },
}
