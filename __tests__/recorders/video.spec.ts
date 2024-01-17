// @ts-check
import { chromium, test } from '@playwright/test';

import settings from '../../core/settings';

test('Video', async () => {
  const browser = await chromium.launch({
    devtools: settings.devTools,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: `${settings.resultsFolder}/videos`,
      size: {
        width: 800,
        height: 600,
      },
    },
  });
  const page = await context.newPage();

  await page.goto(settings.rootFolder);
  await browser.close();
});
