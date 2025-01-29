import { Locator, Page } from "@playwright/test";

export abstract class BaseComponent {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async selectOption(locator: Locator, option: string) {
        await locator.scrollIntoViewIfNeeded();
        await locator.selectOption(option)
    }

    protected async fill(locator: Locator, text: string) {
        await locator.scrollIntoViewIfNeeded();
        await locator.clear();
        await locator.fill(text);
    }

    protected async click(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.click()
    }

    protected async getText(locator: Locator): Promise<string> {
        await locator.scrollIntoViewIfNeeded();
        return await locator.innerText()
    }
}