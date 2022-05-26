// ---------------------------------------------------------

import { createClient } from '@root/prismicio'
import { NextSeo } from 'next-seo'

// ---------------------------------------------------------

import Card from '@components/card'
import Layout from '@layout/index'

// ---------------------------------------------------------

import fixtures from '@components/card/fixtures'
import { PageNotFoundContent } from './404'

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

const isProduction = process.env.NODE_ENV === 'production'

// ---------------------------------------------------------

const SlicePlayground = (props) => {
  let { footer, header } = props

  // -------------------------------------------------------

  return (
    <Layout footer={footer} header={header}>
      <NextSeo nofollow />

      {!isProduction ? (
        <>
          <Card {...fixtures._props} />
        </>
      ) : (
        PageNotFoundContent
      )}
    </Layout>
  )
}

// ---------------------------------------------------------

export default SlicePlayground
