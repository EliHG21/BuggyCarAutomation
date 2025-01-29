import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class ModelPage extends BasePage {
    
    //Locators
    private commentField = this.page.locator('#comment');
    private voteButton = this.page.getByRole('button', { name: 'Vote!' });
    private modelName = this.page.locator('//div[@class="row"]/h3');
    private comment = (name: string) => this.page.locator(`//tr/td[3][text()="${name}"]`)

    constructor(page: Page) {
        super(page);
    }

    //Actions Functions
    public async fillCommentField(commentText: string) {
        await this.fill(this.commentField, commentText);
    }

    public async clickVoteButton() {
        await this.click(this.voteButton);
    }

    public async getCommentText(commentText: string): Promise<string> {
        return await this.getText(this.comment(commentText));
    }

    public async getModelName(): Promise<string> {
        return await this.getText(this.modelName);
    }
}