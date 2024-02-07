// @ts-check
import { chromium } from 'playwright';
import { test } from '@playwright/test';

import specSettings from '../../core/spec-settings';

test('Desktop Chrome', async () => {
  const browser = await chromium.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
