import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { renderWithProviders } from '@/test/test-utils';
import { http } from '@/shared/api/http';

vi.mock('@/screens/google-auth/GoogleAuth', () => ({
  default: () => <div data-testid="google-auth">Google</div>,
}));

describe('Login (integration)', () => {
  beforeEach(() => {
    vi.spyOn(http, 'post').mockResolvedValue({
      data: 'x'.repeat(60),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    } as never);
    vi.spyOn(http, 'request').mockResolvedValue({
      data: 'x'.repeat(60),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    } as never);
  });

  it('renders login fields and google auth slot', () => {
    renderWithProviders(<Login />, { route: '/auth/login' });

    expect(screen.getByText(/inicia sesion/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/alex@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
    expect(screen.getByTestId('google-auth')).toBeInTheDocument();
  });

  it('shows zod validation messages for invalid email', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />, { route: '/auth/login' });

    await user.type(screen.getByPlaceholderText(/alex@gmail.com/i), 'bad');
    await user.type(screen.getByPlaceholderText('••••••••'), 'abc123');
    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
    expect(http.post).not.toHaveBeenCalled();
  });

  it('submits valid credentials through the API client', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />, { route: '/auth/login' });

    await user.type(
      screen.getByPlaceholderText(/alex@gmail.com/i),
      'martin@test.com',
    );
    await user.type(screen.getByPlaceholderText('••••••••'), 'abc123');
    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(http.post).toHaveBeenCalledWith(
        '/login',
        expect.objectContaining({
          email: 'martin@test.com',
          password: 'abc123',
        }),
      );
    });
  });
});

