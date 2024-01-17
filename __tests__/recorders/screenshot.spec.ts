// @ts-check
import { chromium, firefox, webkit, test } from '@playwright/test';

import settings from '../../core/settings';

test('Create Screenshots for Chrome, Firefox, Safari', async () => {
  const browserEngine = [chromium, firefox, webkit];

  for (const browserType of browserEngine) {
    const browser = await browserType.launch();
    const page = await browser.newPage();

    await page.goto(settings.rootFolder);

    for (const browserName of ['chromium', 'firefox', 'webkit']) {
      await page.screenshot({
        path: `${
          settings.resultsFolder
        }/screenshots/screenshot-${browserName}-${crypto.randomUUID()}.png`,
        fullPage: true,
      });
    }

    await browser.close();
  }
});
