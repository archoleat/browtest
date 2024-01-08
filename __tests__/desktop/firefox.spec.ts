import { firefox } from 'playwright';
import { expect, test } from '@playwright/test';

import settings from '../../core/settings.ts';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Desktop Firefox', async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();

  await expect(page).toHaveURL(settings.url);
  await page.goto('/');
  await page.pause();
});
