import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/userSlice';
import authNavReducer from '@/features/authNav/authNavSlice';
import imageReducer from '@/features/ImageSlice/ImageSlice';
import mercadoReducer from '@/features/mercadopago/mercadopago';
import adminReducer from '@/features/admin/admin';
import visitorReducer from '@/features/homeVisitor/visitorSlice';
import type { RootState } from '@/app/store';

type Options = Omit<RenderOptions, 'wrapper'> & {
  preloadedState?: Partial<RootState>;
  route?: string;
  store?: EnhancedStore;
};

export function createTestStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: {
      user: userReducer,
      auth: authNavReducer,
      image: imageReducer,
      mercadopago: mercadoReducer,
      admin: adminReducer,
      visitor: visitorReducer,
    },
    preloadedState: preloadedState as never,
  });
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
    route = '/',
    store = createTestStore(preloadedState),
    ...renderOptions
  }: Options = {},
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[route]}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          {children}
        </MemoryRouter>
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
