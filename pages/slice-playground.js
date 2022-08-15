// ---------------------------------------------------------

import { createClient } from '@root/prismicio'

// ---------------------------------------------------------

import Card from '@components/card'
import Layout from '@layout/index'

// ---------------------------------------------------------

import fixtures from '@components/card/fixtures'

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const footer = await client.getSingle('footer')
  const header = await client.getSingle('header')

  if (process.env.NODE_ENV === 'production') {
    return { notFound: true }
  }
  return {
    props: {
      footer: footer.data,
      header: header.data,
    },
  }
}

// ---------------------------------------------------------

const SlicePlayground = (properties) => {
  let { footer, header } = properties

  // -------------------------------------------------------

  return (
    <Layout footer={footer} header={header}>
      <Card {...fixtures._props} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default SlicePlayground
