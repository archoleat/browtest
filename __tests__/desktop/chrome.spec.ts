import { chromium } from 'playwright';
import { test } from '@playwright/test';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Desktop Chrome', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('/');
  await page.pause();
});
