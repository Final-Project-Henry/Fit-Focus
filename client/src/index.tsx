import axios from 'axios'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Visit from './layouts/Visit/Visit'
import Register from './layouts/Register/Register'
import { store } from './app/store'
import LandingPage from './screens/no-auth/LandingPage'
import ErrorAndRedirectPage from './components/ErrorAndRedirectPage/ErrorAndRedirectPage'
import { errors } from 'shared/shareData'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to dinf the rrot element')
const root = createRoot(rootElement)

const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
axios.defaults.baseURL = process.env.REACT_APP_API_URL

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/visit' element={<Visit />} />
            <Route path='/register' element={<Register />} />
            <Route
              path={'*'}
              element={
                <ErrorAndRedirectPage
                  message={errors.notFound.message}
                  number={errors.notFound.number}
                />
              }
            />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
