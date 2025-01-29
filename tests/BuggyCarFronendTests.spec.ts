import { test, expect } from './BaseTest'

test.describe('Buggy Car Frontend test', () => {
    test('When clicking on popular make it will be the same in the make page', async ({ homePage }) => {
        let expectedMakeName = await homePage.getPopularMakeName();
        let makePage = await homePage.clickPopularMakeButton();
        let actualMakeName = await makePage.getMakeName();
        expect(actualMakeName).toBe(expectedMakeName);
    })
    
    test('When clicking on popular model it will be the same in the make page', async ({ homePage }) => {
        let expectedModelName = await homePage.getPopularModelName();
        let modelPage = await homePage.clickPopularModelButten();
        let actualModelName = await modelPage.getModelName();
        expect(actualModelName).toBe(expectedModelName);
    })
    
})
