import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { AppProviders } from '@/app/providers';
import App from '@/app/App';
import '@/styles/index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found');
}

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppProviders>
          <App />
        </AppProviders>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
