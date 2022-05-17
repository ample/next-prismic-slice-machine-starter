// ---------------------------------------------------------

import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

// ---------------------------------------------------------

const SEO = (props) => {
  let {
    description,
    keywords,
    nofollow,
    openGraphDescription,
    openGraphImage,
    openGraphImageAlt,
    openGraphTitle,
    openGraphUrl,
    siteName,
    title,
    twitterSite,
  } = props

  // -------------------------------------------------------

  const router = useRouter()

  // -------------------------------------------------------

  const canonicalUrl = (
    process.env.NEXT_PUBLIC_SITE_URL +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  // -------------------------------------------------------

  return (
    <>
      {keywords && <meta content={keywords} name="keywords"></meta>}
      <NextSeo
        canonical={canonicalUrl}
        description={description}
        nofollow={nofollow}
        openGraph={{
          description: openGraphDescription,
          images: [
            {
              alt: openGraphImageAlt,
              height: 600,
              type: 'image/jpeg',
              url: openGraphImage,
              width: 800,
            },
          ],
          site_name: siteName,
          title: openGraphTitle,
          url: openGraphUrl,
        }}
        title={title}
        twitter={{
          cardType: 'summary_large_image',
          site: twitterSite,
        }}
      />
    </>
  )
}

// ---------------------------------------------------------

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.array,
  nofollow: PropTypes.bool,
  openGraphDescription: PropTypes.string,
  openGraphImage: PropTypes.string,
  openGraphImageAlt: PropTypes.string,
  openGraphTitle: PropTypes.string,
  openGraphUrl: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string,
  twitterSite: PropTypes.string,
}

SEO.defaultProps = {
  keywords: ['testing', 'testing-2', 'testing 3'],
  themeColor: '#000000',
}

export default SEO
