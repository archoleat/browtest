// @ts-check
import { chromium, firefox, webkit, test } from '@playwright/test';

import settings from '../../core/settings';

test('Create Screenshots for Chrome, Firefox, Safari', async () => {
  const browserEngines = [chromium, firefox, webkit];
  const promises: Array<object> = [];

  browserEngines.forEach((engine) => {
    const browserName = engine.name();

    const screenCapture = async () => {
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

    promises.push(screenCapture());
  });

  await Promise.all(promises);
});
