import { Page } from "playwright";
import { MakePage } from "./MakePage";
import { ModelPage } from "./ModelPage";
import { BasePage } from "./BasePage";

export class OverallRatingPage extends BasePage {

    //Locators
    private makeNameButton = (name: string) => this.page.locator(`//td/a[text()="${name}"]`);
    private modelNameButton = (name: string) => this.page.locator(`//td/a[text()="${name}"]`);
    private viewMoreDetailsAboutModelButton = (name: string) => this.page.locator(`//td[a[text()="${name}"]]/following-sibling::td/a[text()="View more"]`);

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async clickMakeNameButton(makeName: string): Promise<MakePage> {
        await this.click(this.makeNameButton(makeName));
        return new MakePage(this.page);
    }

    public async clickModelNameButton(modelName: string): Promise<ModelPage> {
        await this.click(this.modelNameButton(modelName));
        return new ModelPage(this.page);
    }

    private async clickViewMoreDetailsAboutModelButton(modelName: string): Promise<ModelPage> {
        await this.click(this.viewMoreDetailsAboutModelButton(modelName));
        return new ModelPage(this.page);
    }
}