import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  testDir: 'src/specs',
  workers: 3,
  expect: { timeout: 30_000 },
  use: {
    baseURL: 'http://localhost:3000',
    bypassCSP: true,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
