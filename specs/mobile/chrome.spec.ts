// @ts-check
import { chromium, devices } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/common-specs-settings';

test('Mobile Chrome', async () => {
  const browser = await chromium.launch({
    devtools: settings.devTools,
  });
  const context = await browser.newContext({
    ...devices['Pixel 7'],
  });
  const page = await context.newPage();

  await page.goto(settings.rootFolder);
  await page.pause();
});
