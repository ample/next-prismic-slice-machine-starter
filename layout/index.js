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

// ---------------------------------------------------------

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Ample Next.js Starter</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />

    <DebugMediaQueries />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
