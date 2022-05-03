import Link from 'next/link';
import { linkResolver, repositoryName } from '../prismicio';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';

// ---------------------------------------------------------

import '../styles/libs/sanitize.scss';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import '../styles/global-styles.scss';

// ---------------------------------------------------------

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ children, href, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
      linkResolver={linkResolver}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
