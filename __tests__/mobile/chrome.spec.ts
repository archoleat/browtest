import { chromium, devices } from 'playwright';
import { expect, test } from '@playwright/test';

import settings from '../../core/settings.ts';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Mobile Chrome', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['Galaxy S9+'],
  });
  const page = await context.newPage();

  await expect(page).toHaveURL(settings.url);
  await page.goto('/');
  await page.pause();
});
