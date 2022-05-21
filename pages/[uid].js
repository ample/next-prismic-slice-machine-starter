// ---------------------------------------------------------

import { asLink } from '@prismicio/helpers'
import { createClient, linkResolver } from '@root/prismicio'

// ---------------------------------------------------------

import FlexibleTemplate from '@templates/flexible'

// ---------------------------------------------------------

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData })

  const header = await client.getSingle('header')
  const page = await client.getByUID('flexible-page', params.uid)

  return {
    props: {
      header: header.data,
      page: page.data,
    },
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

const FlexiblePage = ({ header, page }) => {
  let { slices } = page

  return <FlexibleTemplate header={header} slices={slices} />
}

// ---------------------------------------------------------

export default FlexiblePage
