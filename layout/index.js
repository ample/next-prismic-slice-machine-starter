// ---------------------------------------------------------

import dynamic from 'next/dynamic'
import Head from 'next/head'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

const DebugMediaQueries = dynamic(
  () => import('@utilities/debug-media-queries'),
  {
    loading: () => <></>,
  }
)

// ---------------------------------------------------------

import Footer from './footer'
import Header from './header'
import SEO from './seo'

// ---------------------------------------------------------

const Layout = (props) => {
  let { children, footer, header, seo, seoPageSpecific, themeColor } = props

  // -------------------------------------------------------

  return (
    <>
      <Head>
        <meta content={themeColor} name="theme-color" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <link href="/favicons/favicon-48.png" rel="icon" type="image/png" />
        <link href="/favicons/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/favicons/favicon-apple-touch.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
      </Head>

      <SEO {...seo} pageSpecific={seoPageSpecific} />

      <Header {...header} />
      <main>{children}</main>
      <Footer {...footer} />

      <DebugMediaQueries />
    </>
  )
}

// ---------------------------------------------------------

Layout.propTypes = {
  /**
   * Specifies page content.
   */
  children: PropTypes.node.isRequired,

  /**
   * Specifies footer content.
   */
  footer: PropTypes.object,

  /**
   * Specifies Header content.
   */
  header: PropTypes.object,

  /**
   * Specifies SEO metadata
   */
  seo: PropTypes.object,

  /**
   * Specifies page specific SEO metadata
   */
  seoPageSpecific: PropTypes.object,

  /**
   * Specifies theme-color meta tag value.
   */
  themeColor: PropTypes.string,
}

Layout.defaultProps = {
  themeColor: '#000000',
}

export default Layout
