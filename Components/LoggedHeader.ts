import { Page } from "playwright";
import { ProfilePage } from "../Pages/ProfilePage";
import { BaseComponent } from "./BaseComponent";
import { Header } from "./Header";

export class LoggedHeader extends BaseComponent {

    //Header Container Locator
    protected navbar = this.page.locator('nav.navbar');

    ////Locators
    private applicationNameButton = this.navbar.getByText('Buggy Rating');
    private profileButton = this.navbar.getByText('Profile');
    private logoutButton = this.navbar.getByText('Logout');
    private loggedVerification = this.navbar.locator('//span[contains(text(), "Hi")]');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async clickApplicationNameButton() {
        await this.click(this.applicationNameButton)
    }

    public async verifyLogged() {
        await this.loggedVerification.waitFor({ state: 'visible' })
    }

    public async clickProfileButton(): Promise<ProfilePage> {
        await this.click(this.profileButton);
        return new ProfilePage(this.page);
    }

    public async clickLogoutButton(): Promise<Header> {
        await this.click(this.logoutButton);
        return new Header(this.page);
    }
}