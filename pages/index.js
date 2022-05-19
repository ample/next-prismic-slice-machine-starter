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

  const page = await client.getSingle('homepage')

  return {
    props: { page },
  }
}

// ---------------------------------------------------------

const Home = ({ page }) => {
  let { jumbotron, slices } = page.data

  return (
    <Layout>
      <Jumbotron {...jumbotron[0]} />
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default Home
