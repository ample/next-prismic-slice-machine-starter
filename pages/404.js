// ---------------------------------------------------------

import { createClient } from '@root/prismicio'

// ---------------------------------------------------------

import Layout from '@layout/index'

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const header = await client.getSingle('header')

  return {
    props: {
      header: header.data,
    },
  }
}

// ---------------------------------------------------------

const NotFoundPage = ({ header }) => (
  <Layout header={header}>
    <h1>NOT FOUND</h1>
    <p>Uh oh! This page doesn't exist.</p>
  </Layout>
)

// ---------------------------------------------------------

export default NotFoundPage
