import { webkit } from 'playwright';
import { test as spec } from '@playwright/test';

import { specSettings } from '#shared';

spec('Desktop Safari', async () => {
  const browser = await webkit.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
