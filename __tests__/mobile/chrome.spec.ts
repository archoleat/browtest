import { chromium, devices } from 'playwright';
import { test } from '@playwright/test';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Mobile Chrome', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['Pixel 7'],
  });
  const page = await context.newPage();

  await page.goto('/');
  await page.pause();
});
