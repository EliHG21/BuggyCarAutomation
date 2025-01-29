import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: 'tests',
    retries: 3,
    use: {
        headless: false,
        browserName: 'chromium',
        viewport: {
            width: 1536,
            height: 695
        }
    }
})