import { Page } from "playwright";
import { BasePage } from "../Pages/BasePage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { BaseComponent } from "./BaseComponent";
import { LoggedHeader } from "./LoggedHeader";

export class Header extends BaseComponent {

    //Header Container Locator
    protected navbar = this.page.locator('nav.navbar');

    //Locators
    private applicationNameButton = this.navbar.getByText('Buggy Rating');
    private loginField = this.navbar.locator('//input[@placeholder="Login"]');
    private passwordField = this.navbar.locator('//input[@name="password"]');
    private loginButton = this.navbar.getByRole('button', { name: 'Login' });
    private registrationButton = this.navbar.getByText('Register');
    private errorMessage = this.navbar.locator('span.label-warning');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async clickApplicationNameButton() {
        await this.click(this.applicationNameButton)
    }

    public async fillLoginField(loginText: string) {
        await this.fill(this.loginField, loginText);
    }

    public async fillPasswordField(passwordText: string) {
        await this.fill(this.passwordField, passwordText);
    }

    public async clickLoginButton(): Promise<LoggedHeader> {
        await this.click(this.loginButton);
        return new LoggedHeader(this.page);
    }

    public async clickRegistrationButton(): Promise<RegistrationPage> {
        await this.click(this.registrationButton);
        return new RegistrationPage(this.page);
    }

    public async getErrorMessage(): Promise<string> {
        return await this.getText(this.errorMessage);
    }
}