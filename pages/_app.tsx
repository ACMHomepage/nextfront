import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import store from 'src/store';
import { client } from 'src/utils/apolloGraphQL';

import 'src/commons/styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../src/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <div id="modal" style={{ position: 'fixed', zIndex: 50 }} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp;
