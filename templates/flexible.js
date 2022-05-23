// ---------------------------------------------------------

import { SliceZone } from '@prismicio/react'

// --------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  let { footer, header, seo, seoPageSpecific, slices } = props

  // ---------------------------------------------------------

  return (
    <Layout
      footer={footer}
      header={header}
      seo={seo}
      seoPageSpecific={seoPageSpecific}
    >
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default FlexibleTemplate
