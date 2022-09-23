// ---------------------------------------------------------

import { createClient, linkResolver } from '../../prismicio'
import { redirectToPreviewURL, setPreviewData } from '@prismicio/next'

// ---------------------------------------------------------

export default async (req, res) => {
  const client = createClient({ req })
  await setPreviewData({ req, res })
  await redirectToPreviewURL({ client, linkResolver, req, res })
}
