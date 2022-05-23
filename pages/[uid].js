// ---------------------------------------------------------

import { asLink } from '@prismicio/helpers'
import { createClient, linkResolver } from '@root/prismicio'

// ---------------------------------------------------------

import FlexibleTemplate from '@templates/flexible'

// ---------------------------------------------------------

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData })

  const footer = await client.getSingle('footer')
  const header = await client.getSingle('header')
  const page = await client.getByUID('flexible-page', params.uid)
  const seo = await client.getSingle('seo')

  return {
    props: {
      footer: footer.data,
      header: header.data,
      page: page.data,
      seo: seo.data,
      seoPageSpecific: {
        description: page.data.description,
        keywords: page.data.keywords,
        title: page.data.title,
      },
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

const FlexiblePage = (props) => {
  let { footer, header, page, seo, seoPageSpecific } = props

  return (
    <FlexibleTemplate
      footer={footer}
      header={header}
      seo={seo}
      seoPageSpecific={seoPageSpecific}
      slices={page.slices}
    />
  )
}

// ---------------------------------------------------------

export default FlexiblePage
