import { describe, expect, it } from 'vitest';
import { Route, Routes } from 'react-router-dom';
import { screen } from '@testing-library/react';
import ProtectedRoute from './ProtectedRoute';
import { renderWithProviders } from '@/test/test-utils';

describe('ProtectedRoute (integration)', () => {
  it('renders 401 error page when user is missing', () => {
    renderWithProviders(
      <Routes>
        <Route element={<ProtectedRoute user={null} />}>
          <Route path="/private" element={<div>Private content</div>} />
        </Route>
      </Routes>,
      { route: '/private' },
    );

    expect(screen.getByText(/sin autorización/i)).toBeInTheDocument();
    expect(screen.queryByText(/private content/i)).not.toBeInTheDocument();
  });

  it('renders nested outlet when user exists', () => {
    renderWithProviders(
      <Routes>
        <Route element={<ProtectedRoute user={{ email: 'a@b.com' }} />}>
          <Route path="/private" element={<div>Private content</div>} />
        </Route>
      </Routes>,
      { route: '/private' },
    );

    expect(screen.getByText(/private content/i)).toBeInTheDocument();
  });
});
