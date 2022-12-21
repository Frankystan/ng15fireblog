import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@app/models/post.interface';
import { IUser } from '@app/models/user.interface';
import { AuthService } from '@app/services/auth.service';
import { I18nService } from '@app/services/i18n.service';
import { PostService } from '@app/services/post.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
https://willmendesneto.medium.com/ngx-skeleton-loader-states-animations-performance-and-accessibility-for-your-angular-app-ad0fd86da7a5
https://willmendesneto.medium.com/ngx-skeleton-loader-states-animations-performance-and-accessibility-for-your-angular-app-ad0fd86da7a5
https://blog.angulartraining.com/how-to-use-a-skeleton-loader-with-angular-4f03ae8fa5c6
https://stackblitz.com/edit/ngx-skeleton-loader-sample?file=src%2Fapp%2Fapp.component.ts

*/

@Component({
    selector: 'app-page-post-show',
    templateUrl: './page-post-show.component.html',
    styleUrls: ['./page-post-show.component.scss']
})
export class PagePostShowComponent implements OnInit {
    post$!: Observable<IPost>;
    locale!: string;
    isBookMarked$!: Observable<boolean>;
    user!: IUser;
    id!: string;


    constructor(
        private _postService: PostService,
        private _activatedRoute: ActivatedRoute,
        public sanitizer: DomSanitizer,
        private _i18n: I18nService,
        private _auth: AuthService,
    ) { }

    ngOnInit(): void {
        this.locale = this._i18n.language;
        this.id = this._activatedRoute.snapshot.params['id'];
        this.post$ = this._postService.read(this.id);
        this.isBookMarked$ = this._auth.loggedInUser$.pipe(map((user: IUser) => {

            this.user = user;
            this.user.bookmarks = this.user.bookmarks ? this.user.bookmarks : [];

            return !!this.user.bookmarks.find(x => x == this.id);
        }));
    }

    bookmark(state: boolean) {

        this.user.bookmarks = this.user.bookmarks ? this.user.bookmarks : [];

        if (state) {
            this.user.bookmarks?.push(this.id);
        } else {
            if (this.user.bookmarks.findIndex(item => item === this.id) >= 0)
                this.user.bookmarks.splice(this.user.bookmarks.findIndex(item => item === this.id), 1);
        }

        this._auth.bookmarks(this.user.bookmarks);

    }

}
