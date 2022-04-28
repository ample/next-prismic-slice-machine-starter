import React from 'react';

// ---------------------------------------------------------

import Button from '@components/button';
import Layout from '@layout/index';

// ---------------------------------------------------------

const Home = () => (
  <Layout>
    <h1>Heading</h1>
    Note that the only other page is a <Button url="/404/">404 page</Button>,
    but there are some starter components in <code>components</code>. Go to the{' '}
    <Button url="/storybook/">documentation</Button> section to see more.
  </Layout>
);

export default Home;
