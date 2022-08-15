/* eslint-disable import/no-anonymous-default-export */
// ---------------------------------------------------------

import { createClient, linkResolver } from '../../prismicio'
import { redirectToPreviewURL, setPreviewData } from '@prismicio/next'

// ---------------------------------------------------------

export default async (request, response) => {
  const client = createClient({ req: request })
  await setPreviewData({ req: request, response })
  await redirectToPreviewURL({ client, linkResolver, req: request, response })
}
