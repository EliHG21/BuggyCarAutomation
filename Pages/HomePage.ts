import { BasePage } from "./BasePage";
import { OverallRatingPage } from "./OverallRatingPage";
import { MakePage } from "./MakePage";
import { ModelPage } from "./ModelPage";
import { Page } from "playwright";
import { ExtractMake, ExtractModel } from "../Utilities/SubstringUtils";

export class HomePage extends BasePage {

    //Locators
    private popularMakeButton = this.page.locator('//h2[text()="Popular Make"]/following-sibling::a');
    private popularModelButton = this.page.locator('//h2[text()="Popular Model"]/following-sibling::a');
    private overallRatingButton = this.page.locator('//h2[text()="Overall Rating"]/following-sibling::a');
    private popularMakeName = this.page.locator('//h2[text()="Popular Make"]/following-sibling::div/h3');
    private popularModelName = this.page.locator('//h2[text()="Popular Model"]/following-sibling::div/h3');

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async clickPopularMakeButton(): Promise<MakePage> {
        await this.popularMakeButton.click();
        return new MakePage(this.page);
    }

    public async clickPopularModelButten(): Promise<ModelPage> {
        await this.popularModelButton.click();
        return new ModelPage(this.page);
    }

    public async clickOverallRatingButton(): Promise<OverallRatingPage> {
        await this.overallRatingButton.click()
        return new OverallRatingPage(this.page);
    }

    public async getPopularMakeName(): Promise<string> {

        return ExtractMake(await this.getText(this.popularMakeName));
    }

    public async getPopularModelName(): Promise<string> {
        return ExtractModel(await this.getText(this.popularModelName));
    }
}