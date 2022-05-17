// ---------------------------------------------------------

import { NextSeo } from 'next-seo'
import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { SliceZone } from '@prismicio/react'

// ---------------------------------------------------------

import state from '../.slicemachine/libraries-state.json'
import { components } from '@slices/index'

// ---------------------------------------------------------

const SliceSimulatorPage = () => {
  return (
    <>
      <NextSeo nofollow />

      <SliceSimulator
        sliceZone={({ slices }) => (
          <SliceZone components={components} slices={slices} />
        )}
        state={state}
      />
    </>
  )
}

// ---------------------------------------------------------

export default SliceSimulatorPage
