// @ts-check
import { chromium, devices } from 'playwright';
import { test } from '@playwright/test';

import specSettings from '../../core/spec-settings';

test('Mobile Chrome', async () => {
  const browser = await chromium.launch({
    devtools: specSettings.devTools,
  });
  const context = await browser.newContext({
    ...devices['Pixel 7'],
  });
  const page = await context.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
