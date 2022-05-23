// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { Fragment } from 'react'
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

  // ---------------------------------------------------------

  return (
    <>
      {keywords && (
        <meta key="keywords" content={keywords[0].text} name="keywords"></meta>
      )}

      <NextSeo
        canonical={canonicalUrl}
        description={
          description && description[0].text ? description[0].text : description
        }
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
        title={title && title[0].text ? title[0].text : title}
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
  keywords: PropTypes.array,
  nofollow: PropTypes.bool,
  openGraphImage: PropTypes.object,
  openGraphSiteName: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  twitterHandle: PropTypes.array,
}

SEO.defaultProps = {
  themeColor: '#000000',
}

export default SEO
