// ---------------------------------------------------------

import Head from 'next/head'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

// ---------------------------------------------------------

const SEO = (props) => {
  let {
    description,
    keywords,
    nofollow,
    openGraphImage,
    openGraphSiteName,
    pageSpecific,
    title,
    twitterHandle,
  } = props

  // -------------------------------------------------------

  const router = useRouter()

  // -------------------------------------------------------

  const canonicalUrl = (
    process.env.NEXT_PUBLIC_SITE_URL +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  // -------------------------------------------------------

  let pageDescription = description
  const globalDescription = description !== undefined && description[0].text
  const pageSpecificDescription = pageSpecific?.description[0].text

  if (globalDescription) pageDescription = globalDescription
  if (pageSpecificDescription) pageDescription = pageSpecificDescription

  // -------------------------------------------------------

  let pageKeywords = keywords
  const globalKeywords = keywords !== undefined && keywords[0].text
  const pageSpecificKeywords = pageSpecific?.keywords[0].text

  if (globalKeywords) pageKeywords = globalKeywords
  if (pageSpecificKeywords) pageKeywords = pageSpecificKeywords

  // -------------------------------------------------------

  let pageTitle = title
  const globalTitle = title !== undefined && title[0].text
  const pageSpecificTitle = pageSpecific?.title[0].text

  if (globalTitle) pageTitle = globalTitle
  if (pageSpecificTitle) pageTitle = pageSpecificTitle

  // -------------------------------------------------------

  return (
    <>
      <Head>
        {pageKeywords && <meta content={pageKeywords} name="keywords" />}
      </Head>

      <NextSeo
        canonical={canonicalUrl}
        description={pageDescription}
        nofollow={nofollow ? nofollow : undefined}
        openGraph={{
          images: [
            {
              alt: openGraphImage ? openGraphImage.alt : undefined,
              height: openGraphImage ? 600 : undefined,
              type: openGraphImage ? 'image/jpeg' : undefined,
              url: openGraphImage ? openGraphImage.url : undefined,
              width: openGraphImage ? 800 : undefined,
            },
          ],
          site_name: openGraphSiteName ? openGraphSiteName[0].text : undefined,
        }}
        title={pageTitle}
        twitter={{
          cardType: 'summary_large_image',
          site: twitterHandle ? twitterHandle[0].text : undefined,
        }}
      />
    </>
  )
}

// ---------------------------------------------------------

SEO.propTypes = {
  description: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  keywords: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  nofollow: PropTypes.bool,
  openGraphImage: PropTypes.object,
  openGraphSiteName: PropTypes.array,
  pageSpecific: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  twitterHandle: PropTypes.array,
}

SEO.defaultProps = {
  themeColor: '#000000',
}

export default SEO
