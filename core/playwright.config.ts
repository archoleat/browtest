import { defineConfig } from '@playwright/test';

// https://playwright.dev/docs/test-configuration
export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  testDir: '../__tests__',
  workers: 3,
  expect: { timeout: 30000 },
  use: {
    baseURL: 'http://localhost:3000',
    bypassCSP: true,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
