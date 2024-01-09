import { defineConfig } from '@playwright/test';

const isCI = process.env['CI'];

// https://playwright.dev/docs/test-configuration
export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  testDir: '../__tests__',
  workers: isCI ? 1 : 3,
  expect: { timeout: 30000 },
  use: {
    baseURL: 'http://localhost:3000/',
    bypassCSP: true,
    colorScheme: 'dark',
    headless: !!isCI,
    trace: 'on-first-retry',
  },
});
