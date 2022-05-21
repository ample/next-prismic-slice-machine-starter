// ---------------------------------------------------------

import { SliceZone } from '@prismicio/react'

// --------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  let { header, slices } = props

  // ---------------------------------------------------------

  return (
    <Layout header={header}>
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default FlexibleTemplate
