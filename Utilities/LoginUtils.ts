import { Page } from "playwright";
import { Header } from "../Components/Header";

export async function Login(page: Page, header: Header, login: string, password: string): Promise<number> {
    await header.fillLoginField(login);
    await header.fillPasswordField(password);
    await header.clickLoginButton();
    let tokenResponse = await (await page.waitForResponse('**/prod/oauth/token')).status();
    return tokenResponse;
}

export async function Register(header: Header, login: string, firstName: string, lastName: string, password: string) {
    let registrationPage = await header.clickRegistrationButton();
    await registrationPage.fillLoginField(login);
    await registrationPage.fillFirstNameField(firstName);
    await registrationPage.fillLastNameField(lastName);
    await registrationPage.fillPasswordField(password);
    await registrationPage.fillConfirmPasswordField(password);
    await registrationPage.clickRegisterButton();
    await header.clickApplicationNameButton();
}