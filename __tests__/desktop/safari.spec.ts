// @ts-check
import { webkit } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/settings.ts';

// https://playwright.dev/docs/writing-tests
test('Desktop Safari', async () => {
  const browser = await webkit.launch({
    devtools: settings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(settings.rootFolder);
  await page.pause();
});
