// ---------------------------------------------------------

import { createClient } from '@root/prismicio'

// ---------------------------------------------------------

import Layout from '@layout/index'
import Link from '@components/link'

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const footer = await client.getSingle('footer')
  const header = await client.getSingle('header')

  return {
    props: {
      footer: footer.data,
      header: header.data,
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
  let { footer, header } = props

  return (
    <Layout footer={footer} header={header}>
      {PageNotFoundContent}
    </Layout>
  )
}

// ---------------------------------------------------------

export default PageNotFound
