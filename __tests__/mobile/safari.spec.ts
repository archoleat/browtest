import { webkit, devices } from 'playwright';
import { expect, test } from '@playwright/test';

import settings from '../../core/settings.ts';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Mobile Safari', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...devices['iPhone 14'],
  });
  const page = await context.newPage();

  await expect(page).toHaveURL(settings.url);
  await page.goto('/');
  await page.pause();
});
