// ---------------------------------------------------------

import { SliceZone } from '@prismicio/react'

// --------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  let { footer, header, seo, slices } = props

  // ---------------------------------------------------------

  return (
    <Layout footer={footer} header={header} seo={seo}>
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default FlexibleTemplate
