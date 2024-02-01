// @ts-check
import { chromium } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/common-specs-settings';

test('Desktop Chrome', async () => {
  const browser = await chromium.launch({
    devtools: settings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(settings.rootFolder);
  await page.pause();
});
