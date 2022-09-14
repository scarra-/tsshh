import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'styled-components/macro'
import './i18n'

import GlobalStyles from './theme/globalStyles'
import theme from './theme'

import Routes from './Routes'

const App = () => (
  <SWRConfig
    value={{
      revalidateOnFocus: false,
    }}
  >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </SWRConfig>
)

ReactDOM.render(<App />, document.getElementById('root'))
