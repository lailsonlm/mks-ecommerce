import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from '../app/store'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
          <ToastContainer />
          <GlobalStyle />
        </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>

  )
}

export default MyApp
