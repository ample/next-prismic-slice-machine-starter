import { createClient } from '@root/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { SliceZone } from '@prismicio/react';

// ---------------------------------------------------------

import Layout from '@layout/index';
import { components } from '@slices/index';

// ---------------------------------------------------------

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');

  return {
    props: { page },
  };
};

// ---------------------------------------------------------

const Home = ({ page }) => {
  let { body, slices } = page.data;

  return (
    <Layout>
      <PrismicRichText field={body} />
      <SliceZone components={components} slices={slices} />
    </Layout>
  );
};

export default Home;
