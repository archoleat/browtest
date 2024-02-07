// @ts-check
import { firefox } from 'playwright';
import { test } from '@playwright/test';

import specSettings from '../../core/spec-settings';

test('Desktop Firefox', async () => {
  const browser = await firefox.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
