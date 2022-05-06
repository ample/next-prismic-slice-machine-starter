import dynamic from 'next/dynamic';
import Head from 'next/head';
import PropTypes from 'prop-types';

// ---------------------------------------------------------

const DebugMediaQueries = dynamic(
  () => import('@utilities/debug-media-queries'),
  {
    loading: () => <></>,
  }
);

// ---------------------------------------------------------

import Footer from './footer';
import Header from './header';
import SEO from './seo';

// ---------------------------------------------------------

const Layout = (props) => {
  let { children, themeColor } = props;

  // -------------------------------------------------------

  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta content={themeColor} name="theme-color"></meta>
      </Head>

      <SEO />

      <Header />
      <main>{children}</main>
      <Footer />

      <DebugMediaQueries />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeColor: PropTypes.string,
};

Layout.defaultProps = {
  themeColor: '#000000',
};

export default Layout;
