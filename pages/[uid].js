// ---------------------------------------------------------

import { asLink } from '@prismicio/helpers'
import { createClient, linkResolver } from '@root/prismicio'

// ---------------------------------------------------------

import FlexibleTemplate from '@templates/flexible'

// ---------------------------------------------------------

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData })

  const page = await client.getByUID('flexible-page', params.uid)

  return {
    props: { page },
  }
}

export const getStaticPaths = async () => {
  const client = createClient()
  const documents = await client.getAllByType('flexible-page')
  return {
    fallback: false,
    paths: documents.map((doc) => asLink(doc, linkResolver)),
  }
}

// ---------------------------------------------------------

const FlexiblePage = ({ page }) => {
  let { slices } = page.data

  return <FlexibleTemplate slices={slices} />
}

// ---------------------------------------------------------

export default FlexiblePage
