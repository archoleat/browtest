// @ts-check
import { chromium } from 'playwright';
import { test } from '@playwright/test';

import settings from '../../core/settings';

describe('Video', () => {
  test('', async () => {
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
});
