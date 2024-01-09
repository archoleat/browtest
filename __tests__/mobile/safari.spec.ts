// @ts-check
import { webkit, devices } from 'playwright';
import { test } from '@playwright/test';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Mobile Safari', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...devices['iPhone 14'],
  });
  const page = await context.newPage();

  await page.goto('/');
  await page.pause();
});
