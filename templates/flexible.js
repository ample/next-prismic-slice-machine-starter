// ---------------------------------------------------------

import { SliceZone } from '@prismicio/react'

// --------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

const FlexibleTemplate = (properties) => {
  let { footer, header, seo, seoPageSpecific, slices } = properties

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
