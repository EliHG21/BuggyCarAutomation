import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {

    //Locators
    private firstNameField = this.page.locator('#firstName');
    private lastNameField = this.page.locator('#lastName');
    private genderField = this.page.locator('#gender');
    private ageField = this.page.locator('#age');
    private addressField = this.page.locator('#address');
    private phoneField = this.page.locator('#phone');
    private hobbySelectDropdown = this.page.locator('#hobby');
    private currentPasswordField = this.page.locator('#currentPassword');
    private newPasswordField = this.page.locator('#newPassword');
    private confirmNewPasswordField = this.page.locator('#newPasswordConfirmation');
    private languageSelectDropdown = this.page.locator('#language');
    private saveButton = this.page.getByRole('button', { name: 'Save' });
    private cancelButton = this.page.getByText('Cancel');
    private errorMessage = this.page.locator('//div[@class="card"]/following-sibling::div[contains(@class, "alert-danger")]');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async fillFirstNameField(firstNameText: string) {
        await this.fill(this.firstNameField, firstNameText);
    }

    public async fillLastNameField(lastNameText: string) {
        await this.fill(this.lastNameField, lastNameText);
    }

    public async fillGenderField(genderOption: string) {
        await this.fill(this.genderField, genderOption);
    }

    public async fillAgeField(ageText: string) {
        await this.fill(this.ageField, ageText);
    }

    public async fillAddressField(addressText: string) {
        await this.fill(this.addressField, addressText);
    }

    public async fillPhoneField(phoneText: string) {
        await this.fill(this.phoneField, phoneText);
    }

    public async selectHobbyFromDropdown(hobbyOption: string) {
        await this.selectOption(this.hobbySelectDropdown, hobbyOption);
    }

    public async fillCurrentPasswordField(currentPasswordText: string) {
        await this.fill(this.currentPasswordField, currentPasswordText);
    }

    public async fillNewPasswordField(newPasswordText: string) {
        await this.fill(this.newPasswordField, newPasswordText);
    }

    public async fillConfirmNewPasswordField(confirmNewPasswordText: string) {
        await this.fill(this.confirmNewPasswordField, confirmNewPasswordText);
    }

    public async selectLanguageFromDropdown(languageOption: string) {
        await this.selectOption(this.languageSelectDropdown, languageOption);
    }

    public async clickSaveButton() {
        await this.click(this.saveButton);
    }

    public async clickCancelButton() {
        await this.click(this.cancelButton);
    }

    public async getErrorMessage(): Promise<string> {
        return await this.getText(this.errorMessage);
    }

    public async getGenderCurrentValue(): Promise<string> {
        await this.genderField.scrollIntoViewIfNeeded();
        return await this.genderField.inputValue();
    }
}