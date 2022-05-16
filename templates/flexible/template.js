import { SliceZone } from '@prismicio/react';

// --------------------------------------------------------

import Layout from '@layout/index';
import { components } from '@slices/index';

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  let { children, slices } = props;

  // ---------------------------------------------------------

  return (
    <Layout>
      {children}
      <SliceZone components={components} slices={slices} />
    </Layout>
  );
};

export default FlexibleTemplate;
