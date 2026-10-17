import { Page, expect } from '@playwright/test';

export async function signIn(page: Page): Promise<void> {
  const testEmail = process.env.TEST_EMAIL;
  if (!testEmail) {
    throw new Error('TEST_EMAIL is missing. Add it to the .env file.');
  }

  const testPassword = process.env.TEST_PASSWORD;
  if (!testPassword) {
    throw new Error('TEST_PASSWORD is missing. Add it to the .env file.');
  }

  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  await page.getByLabel('Email address').fill(testEmail);
  await page.getByLabel('Password *', { exact: true }).fill(testPassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
}