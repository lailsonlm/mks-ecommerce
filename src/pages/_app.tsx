import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../app/store'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>

  )
}

export default MyApp
