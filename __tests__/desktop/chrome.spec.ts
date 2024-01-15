// @ts-check
import { chromium } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/settings';

// https://playwright.dev/docs/writing-tests
describe('Desktop Chrome', () => {
  test('Test', async () => {
    const browser = await chromium.launch({
      devtools: settings.devTools,
    });
    const page = await browser.newPage();

    await page.goto(settings.rootFolder);
    await page.pause();
  });
});
