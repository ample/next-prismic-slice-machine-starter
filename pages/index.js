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

  return {
    props: {
      footer: footer.data,
      header: header.data,
      page: page.data,
    },
  }
}

// ---------------------------------------------------------

const Home = (props) => {
  let { footer, header, page } = props

  return (
    <Layout footer={footer} header={header}>
      <Jumbotron {...page.jumbotron[0]} />
      <SliceZone components={components} slices={page.slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default Home
