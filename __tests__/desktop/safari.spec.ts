// @ts-check
import { webkit, test } from '@playwright/test';

import settings from '../../core/settings';

// https://playwright.dev/docs/writing-tests
test('Desktop Safari', async () => {
  const browser = await webkit.launch({
    devtools: settings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(settings.rootFolder);
  await page.pause();
});
