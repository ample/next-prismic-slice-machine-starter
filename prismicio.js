// ---------------------------------------------------------

import * as prismic from '@prismicio/client'
import sm from './sm.json'
import { enableAutoPreviews } from '@prismicio/next'

// ---------------------------------------------------------

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// ---------------------------------------------------------

// Update to match route structure
export const linkResolver = (document_) => {
  switch (document_.type) {
    case 'homepage':
      return '/'
    case 'flexible-page':
      return `/${document_.uid}`
    default:
      return
  }
}

// ---------------------------------------------------------

// This factory function allows smooth preview setup
export const createClient = (config = {}) => {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
