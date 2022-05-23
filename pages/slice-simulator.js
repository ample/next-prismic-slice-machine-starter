// ---------------------------------------------------------

import { createClient } from '@root/prismicio'
import { NextSeo } from 'next-seo'
import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { SliceZone } from '@prismicio/react'

// ---------------------------------------------------------

import state from '../.slicemachine/libraries-state.json'
import { components } from '@slices/index'

// ---------------------------------------------------------

import Layout from '@layout/index'

// ---------------------------------------------------------

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

const SliceSimulatorPage = (props) => {
  let { footer, header } = props

  return (
    <>
      <NextSeo nofollow />

      {!isProduction ? (
        <>
          <SliceSimulator
            sliceZone={({ slices }) => (
              <SliceZone components={components} slices={slices} />
            )}
            state={state}
          />
        </>
      ) : (
        <Layout footer={footer} header={header}>
          {PageNotFoundContent}
        </Layout>
      )}
    </>
  )
}

// ---------------------------------------------------------

export default SliceSimulatorPage
