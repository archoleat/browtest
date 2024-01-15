// @ts-check
import { devices, webkit } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/settings';

// https://playwright.dev/docs/writing-tests
describe('Mobile Safari', () => {
  test('Test', async () => {
    const browser = await webkit.launch({
      devtools: settings.devTools,
    });
    const context = await browser.newContext({
      ...devices['iPhone 14'],
    });
    const page = await context.newPage();

    await page.goto(settings.rootFolder);
    await page.pause();
  });
});
