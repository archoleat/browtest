// @ts-check
import { firefox } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/settings';

// https://playwright.dev/docs/writing-tests
test('Desktop Firefox', async () => {
  const browser = await firefox.launch({
    devtools: settings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(settings.rootFolder);
  await page.pause();
});
