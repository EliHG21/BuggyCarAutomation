import { Page } from "playwright";
import { ModelPage } from "./ModelPage";
import { BasePage } from "./BasePage";

export class MakePage extends BasePage {

    //Locators
    private modelNameButton = (name: string) => this.page.locator(`//a[text()="${name}"]`);
    private viewMoreDetailsAboutModelButton = (name: string) => this.page.locator(`//td[a[text()="${name}"]]/following-sibling::td/a[text()="View more"]`);
    private makeName = this.page.locator('//div[@class="card"]/h3');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async clickModelNameButton(modelName: string): Promise<ModelPage> {
        await this.click(this.modelNameButton(modelName));
        return new ModelPage(this.page);
    }

    public async clickViewMoreDetailsButton(modelName: string): Promise<ModelPage> {
        await this.click(this.viewMoreDetailsAboutModelButton(modelName));
        return new ModelPage(this.page);
    }

    public async getMakeName(): Promise<string> {
        return await this.getText(this.makeName);
    }
}