import { webkit } from 'playwright';
import { test } from '@playwright/test';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Desktop Safari', async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();

  await page.goto('/');
  await page.pause();
});
