import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';

import { client } from 'src/utils/apolloGraphQL';

import 'src/commons/styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../src/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <div id="modal" />
    </ApolloProvider>
  )
}

export default MyApp;
