import axios from 'axios'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { store } from './app/store'
import LandingPage from './screens/no-auth/LandingPage'
import Visit from './layouts/Visit/Visit'
import Register from './layouts/Register/Register'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import Error_page from './Components/error/Error_page'
// import App from './App'

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
            <Route path={'*'} element={<Error_page error='URL inexistente.' numb_error='404' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
