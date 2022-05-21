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

  const header = await client.getSingle('header')
  const page = await client.getSingle('homepage')

  return {
    props: {
      header: header.data,
      page: page.data,
    },
  }
}

// ---------------------------------------------------------

const Home = ({ header, page }) => {
  let { jumbotron, slices } = page

  return (
    <Layout header={header}>
      <Jumbotron {...jumbotron[0]} />
      <SliceZone components={components} slices={slices} />
    </Layout>
  )
}

// ---------------------------------------------------------

export default Home
