// @ts-check
import { webkit } from 'playwright';
import { test } from '@playwright/test';

import specSettings from '../../spec-settings.ts';

test('Desktop Safari', async () => {
  const browser = await webkit.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
