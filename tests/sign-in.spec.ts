import { test, expect } from '@playwright/test';

const testEmail = process.env.TEST_EMAIL;
if (!testEmail) {
  throw new Error('TEST_EMAIL is missing. Add it to the .env file.');
}

const testPassword = process.env.TEST_PASSWORD;
if (!testPassword) {
  throw new Error('TEST_PASSWORD is missing. Add it to the .env file.');
}

test('Sign-in Account', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  await page.getByLabel('Email address').fill(testEmail);
  await page.getByLabel('Password *', { exact: true }).fill(testPassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
  await expect(page.getByText('Here you can manage your profile, favorites and orders.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Favorites', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Invoices', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Messages', exact: true })).toBeVisible();
});
