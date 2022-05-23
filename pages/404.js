// ---------------------------------------------------------

import { createClient } from '@root/prismicio'

// ---------------------------------------------------------

import Layout from '@layout/index'
import Link from '@components/link'
import SEO from '@layout/seo'

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const footer = await client.getSingle('footer')
  const header = await client.getSingle('header')
  const seo = await client.getSingle('seo')

  return {
    props: {
      footer: footer.data,
      header: header.data,
      seo: seo.data,
    },
  }
}

// ---------------------------------------------------------

export const PageNotFoundContent = (
  <>
    <h1>NOT FOUND</h1>
    <p>Uh oh! This page doesn't exist.</p>
    <Link url="/">Back to the homepage?</Link>
  </>
)

// ---------------------------------------------------------

const PageNotFound = (props) => {
  let { footer, header, seo } = props

  return (
    <Layout footer={footer} header={header} seo={seo}>
      <SEO description="Page not found" title="Page not found" nofollow />
      {PageNotFoundContent}
    </Layout>
  )
}

// ---------------------------------------------------------

export default PageNotFound
