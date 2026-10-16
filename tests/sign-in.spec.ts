import { test, expect } from '@playwright/test';
import { signIn } from './helpers/auth';

test('Sign-in Account', async ({ page }) => {
  await signIn(page);

  await expect(page.getByText('Here you can manage your profile, favorites and orders.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Favorites', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Invoices', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Messages', exact: true })).toBeVisible();
});
