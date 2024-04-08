import { chromium } from 'playwright';
import { test as spec } from '@playwright/test';

import { specSettings } from '../../spec-settings.ts';

spec('Desktop Chrome', async () => {
  const browser = await chromium.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
