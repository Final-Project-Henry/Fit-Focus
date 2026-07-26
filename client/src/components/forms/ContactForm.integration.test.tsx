import { describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { renderWithProviders } from '@/test/test-utils';

describe('ContactForm (integration)', () => {
  it('shows validation errors for empty submit', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    renderWithProviders(<ContactForm onSubmit={onSubmit} />);

    await user.click(screen.getByRole('button', { name: /enviar/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits a valid contact payload', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    renderWithProviders(<ContactForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/nombre/i), 'Martin');
    await user.type(screen.getByLabelText(/^email$/i), 'martin@test.com');
    await user.type(screen.getByLabelText(/asunto/i), 'Ayuda');
    await user.type(
      screen.getByLabelText(/comentario/i),
      'Necesito ayuda con mi cuenta premium',
    );
    await user.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Martin',
          email: 'martin@test.com',
          asunto: 'Ayuda',
          comment: 'Necesito ayuda con mi cuenta premium',
        }),
      );
    });
  });
});
