// @ts-check
import { chromium, firefox, webkit } from 'playwright';
import { test } from '@playwright/test';

import settings from '../core/settings';

test('Screenshots', async () => {
  for (const browserType of [chromium, firefox, webkit]) {
    const browser = await browserType.launch();
    const page = await browser.newPage();

    await page.goto(settings.rootFolder);

    for (const browserName of ['chromium', 'firefox', 'webkit']) {
      await page.screenshot({
        path: `screenshots/screenshot-${browserName}-${crypto.randomUUID()}.png`,
        fullPage: true,
      });
    }

    await browser.close();
  }
});
