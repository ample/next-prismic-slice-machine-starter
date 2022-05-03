import { asLink } from '@prismicio/helpers';
import { createClient, linkResolver } from '@root/prismicio';
import { SliceZone } from '@prismicio/react';

// ---------------------------------------------------------

import Layout from '@layout/index';
import { components } from '@slices/index';

// ---------------------------------------------------------

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const flexiblePage = await client.getByUID('flexible-page', params.uid);

  return {
    props: { flexiblePage },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType('flexible-page');
  return {
    fallback: true,
    paths: documents.map((doc) => asLink(doc, linkResolver)),
  };
}

// ---------------------------------------------------------

const FlexiblePage = ({ flexiblePage }) => {
  return (
    <Layout>
      <SliceZone components={components} slices={flexiblePage.data.slices} />
    </Layout>
  );
};

export default FlexiblePage;
