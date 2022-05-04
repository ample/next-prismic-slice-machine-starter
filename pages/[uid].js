import { asLink } from '@prismicio/helpers';
import { createClient, linkResolver } from '@root/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { SliceZone } from '@prismicio/react';

// ---------------------------------------------------------

import Layout from '@layout/index';
import { components } from '@slices/index';

// ---------------------------------------------------------

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID('flexible-page', params.uid);

  return {
    props: { page },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();
  const documents = await client.getAllByType('flexible-page');
  return {
    fallback: false,
    paths: documents.map((doc) => asLink(doc, linkResolver)),
  };
};

// ---------------------------------------------------------

const FlexiblePage = ({ page }) => {
  let { body, slices } = page.data;

  // -------------------------------------------------------

  return (
    <Layout>
      <PrismicRichText field={body} />
      <SliceZone components={components} slices={slices} />
    </Layout>
  );
};

export default FlexiblePage;
