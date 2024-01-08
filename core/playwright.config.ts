import { defineConfig } from '@playwright/test';

import settings from './settings.ts';

// https://playwright.dev/docs/test-configuration
export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  testDir: '../__tests__',
  workers: 3,
  expect: { timeout: 30000 },
  use: {
    baseURL: settings.url,
    bypassCSP: true,
    colorScheme: 'dark',
    headless: false,
    trace: 'on-first-retry',
  },
});
