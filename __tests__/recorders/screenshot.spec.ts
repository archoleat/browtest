// @ts-check
import { chromium, firefox, webkit, test } from '@playwright/test';

import settings from '../../core/settings';

test('Take screenshots for Chrome, Firefox, and Safari', async () => {
  const browserEngines = [chromium, firefox, webkit];
  const screenshotPromises: Array<object> = [];

  browserEngines.forEach((engine) => {
    const browserName = engine.name();

    const takeScreenshot = async () => {
      const browser = await engine.launch();
      const page = await browser.newPage();

      await page.goto(settings.rootFolder);

      await page.screenshot({
        path: `${
          settings.resultsFolder
        }/screenshots/${browserName}-${Date.now()}.png`,
        fullPage: true,
      });

      await browser.close();
    };

    screenshotPromises.push(takeScreenshot());
  });

  await Promise.all(screenshotPromises);
});
