// @ts-check
import { webkit, devices } from 'playwright';
import { test } from '@playwright/test';

import specSettings from '../../core/spec-settings';

test('Mobile Safari', async () => {
  const browser = await webkit.launch({
    devtools: specSettings.devTools,
  });
  const context = await browser.newContext({
    ...devices['iPhone 14'],
  });
  const page = await context.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
