import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {

    //Locators
    private loginField = this.page.locator('#username');
    private firstNameField = this.page.locator('#firstName');
    private lastNameField = this.page.locator('#lastName');
    private passwordField = this.page.locator('#password');
    private confirmPasswordField = this.page.locator('#confirmPassword');
    private registerButton = this.page.getByRole('button', { name: 'Register' });
    private cancelButton = this.page.getByText('Cancel');
    private errorMessage = this.page.locator('//a[text()="Cancel"]/following-sibling::div[contains(@class, "alert-danger")]');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async fillLoginField(loginText: string) {
        await this.fill(this.loginField, loginText);
    }

    public async fillFirstNameField(firstNameText: string) {
        await this.fill(this.firstNameField, firstNameText);
    }

    public async fillLastNameField(lastNameText: string) {
        await this.fill(this.lastNameField, lastNameText);
    }

    public async fillPasswordField(passwordText: string) {
        await this.fill(this.passwordField, passwordText);
    }

    public async fillConfirmPasswordField(confirmPasswordText: string) {
        await this.fill(this.confirmPasswordField, confirmPasswordText);
    }

    public async clickRegisterButton() {
        await this.click(this.registerButton);
    }

    public async clickCancelButton() {
        await this.click(this.cancelButton);
    }

    public async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
}