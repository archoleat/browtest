// @ts-check
import { firefox } from 'playwright';
import { test } from '@playwright/test';

// https://playwright.dev/docs/writing-tests
test('Test Web App on Desktop Firefox', async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();

  await page.goto('/');
  await page.pause();
});
