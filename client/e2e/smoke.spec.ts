import { expect, test } from '@playwright/test';

test.describe('Fit Focus smoke (e2e)', () => {
  test('landing page shows brand and CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /fit focus/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /comencemos/i })).toBeVisible();
  });

  test('CTA navigates to visitor home when logged out', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /comencemos/i }).click();
    await expect(page).toHaveURL(/\/home$/);
  });

  test('login screen renders email and password fields', async ({ page }) => {
    await page.goto('/auth/login');
    await expect(
      page.getByRole('heading', { name: /inicia sesion/i }),
    ).toBeVisible();
    await expect(page.getByPlaceholder(/alex@gmail.com/i)).toBeVisible();
    await expect(page.getByPlaceholder('••••••••')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'iniciar sesión', exact: true }),
    ).toBeVisible();
  });

  test('login form shows validation for invalid email', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByPlaceholder(/alex@gmail.com/i).fill('bad-email');
    await page.getByPlaceholder('••••••••').fill('abc123');
    await page.getByRole('button', { name: 'iniciar sesión', exact: true }).click();
    await expect(page.getByText(/invalid email/i)).toBeVisible();
  });

  test('signup screen is reachable', async ({ page }) => {
    await page.goto('/auth/sing-up');
    await expect(page.getByRole('heading', { name: /registrate/i })).toBeVisible();
    await expect(page.getByPlaceholder('Alex', { exact: true })).toBeVisible();
  });
});
