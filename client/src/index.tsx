import axios from 'axios'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { ScreenMessageProvider } from 'contexts/ScreenMessageContext'
import ManagementRoutes from 'routes/ManagementRoutes'
import theme from 'shared/theme'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
// if (!rootElement) throw new Error('Failed to dinf the root element') //other method
const root = createRoot(rootElement)

const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
axios.defaults.baseURL = process.env.REACT_APP_API_URL

root.render(
  <GoogleOAuthProvider clientId={googleId}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ScreenMessageProvider>
          <BrowserRouter>
            <ManagementRoutes />
          </BrowserRouter>
        </ScreenMessageProvider>
      </Provider>
    </ThemeProvider>
  </GoogleOAuthProvider>,
)
