import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

/* FUENTES:

https://itnext.io/manage-angular-page-titles-translation-d1384bbede86


*/


@Injectable({
	providedIn: "root",
})
export class CustomTitleStrategy extends TitleStrategy {
    constructor(private translateService: TranslateService,
        private readonly title: Title) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);
        if (title) {

            this.translateService.get(title).subscribe((translatedTitle) => {

                this.title.setTitle(`Ng15FireBlog | ${translatedTitle}`);
            })
        } else {
            // this.title.setTitle('DEFAULT_TITLE');
            this.title.setTitle('Ng15FireBlog');
        }
    }
}
