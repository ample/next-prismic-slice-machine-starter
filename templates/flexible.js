// ---------------------------------------------------------

import { SliceZone } from '@prismicio/react'

// --------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  let { slices } = props

  // ---------------------------------------------------------

  return (
    <Layout>
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default FlexibleTemplate
