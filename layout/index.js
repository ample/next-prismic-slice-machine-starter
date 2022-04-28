import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// ---------------------------------------------------------

import Footer from './footer';
import Header from './header';
import DebugMediaQueries from '@utilities/debug-media-queries';

// ---------------------------------------------------------

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Ample Next.js Starter</title>
      <link rel="icon" href="/favicon.ico" />
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
