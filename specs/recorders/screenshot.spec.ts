import { chromium, firefox, webkit } from 'playwright';
import { test as spec } from '@playwright/test';

import { specSettings } from '#settings';

spec('Take screenshots for Chrome, Firefox, and Safari', async () => {
  const browserEngines = [chromium, firefox, webkit];
  const screenshots: Array<object> = [];

  for (const engine of browserEngines) {
    const engineName = engine.name();

    const takeScreenshot = async () => {
      const browser = await engine.launch();
      const page = await browser.newPage();

      await page.goto(specSettings.rootFolder);

      await page.screenshot({
        path: `${
          specSettings.resultsFolder
        }/screenshots/${engineName}-${Date.now()}.png`,
        fullPage: true,
      });

      await browser.close();
    };

    screenshots.push(takeScreenshot());
  }

  await Promise.all(screenshots);
});
