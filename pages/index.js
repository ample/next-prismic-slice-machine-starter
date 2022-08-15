// ---------------------------------------------------------

import { createClient } from '@root/prismicio'
import { SliceZone } from '@prismicio/react'

// ---------------------------------------------------------

import Layout from '@layout/index'
import { components } from '@slices/index'

// ---------------------------------------------------------

import Jumbotron from '@slices/Jumbotron'

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const footer = await client.getSingle('footer')
  const header = await client.getSingle('header')
  const page = await client.getSingle('homepage')
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

// ---------------------------------------------------------

const Home = (properties) => {
  const { footer, header, page, seo, seoPageSpecific } = properties

  return (
    <Layout
      footer={footer}
      header={header}
      page={page}
      seo={seo}
      seoPageSpecific={seoPageSpecific}
    >
      <Jumbotron {...page.jumbotron[0]} />
      <SliceZone components={components} slices={page.slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default Home
