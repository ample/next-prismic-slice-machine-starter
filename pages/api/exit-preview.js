// ---------------------------------------------------------

import { exitPreview } from '@prismicio/next'

// ---------------------------------------------------------

export default async function exit(request, response) {
  await exitPreview({ req: request, response })
}
