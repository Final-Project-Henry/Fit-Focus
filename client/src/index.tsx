import axios from 'axios'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { store } from './app/store'
import RoutesComponent from 'routes/Routes'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
// if (!rootElement) throw new Error('Failed to dinf the rrot element')
const root = createRoot(rootElement)

const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
axios.defaults.baseURL = process.env.REACT_APP_API_URL

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
