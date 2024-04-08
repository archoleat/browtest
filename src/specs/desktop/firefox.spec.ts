import { firefox } from 'playwright';
import { test as spec } from '@playwright/test';

import { specSettings } from '../../spec-settings.ts';

spec('Desktop Firefox', async () => {
  const browser = await firefox.launch({
    devtools: specSettings.devTools,
  });
  const page = await browser.newPage();

  await page.goto(specSettings.rootFolder);
  await page.pause();
});
