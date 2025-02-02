import { test as base, expect, request } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { Login, Register } from "../Utilities/LoginUtils";
import { Header } from "../Components/Header";
import { LoggedHeader } from "../Components/LoggedHeader";

export const test = base.extend<{
    homePage: HomePage,
    loggedHeader: LoggedHeader
}>({
    page: async ({ page }, use) => {
        await page.goto('https://buggy.justtestit.org/');
        await use(page);
    },
    request: async({ request }, use) => {
        await use(request);
    },
    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },
    loggedHeader: async ({ page }, use) => {
        let loggedHeader = new LoggedHeader(page);
        await use(loggedHeader);
    }
})

test.beforeEach(async ({ page }) => {
    let homePage = new HomePage(page);
    let header = new Header(page);
    let loggedHeader = new LoggedHeader(page);
    let loginResponse = await Login(page, header, 'elimelechTest', 'ELI#melech1234');
    if(loginResponse == 401) {
        await Register(header, 'elimelechTest', 'Eli', 'Gold', 'ELI#melech1234');
        await Login(page, header, 'elimelechTest', 'ELI#melech1234');
    }
    await loggedHeader.verifyLogged();
});

export { expect };
