import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { IPost } from "@app/models/post.interface";
import { I18nService } from "@app/services/i18n.service";
import { PostService } from "@app/services/post.service";
import { Observable, tap } from "rxjs";

@Component({
	selector: "app-page-post-show",
	templateUrl: "./page-post-show.component.html",
	styleUrls: ["./page-post-show.component.scss"],
})
export class PagePostShowComponent implements OnInit{
	post$!: Observable<IPost>;
	locale!: string;

	constructor(
		private _postService: PostService,
		private _activatedRoute: ActivatedRoute,
		public sanitizer: DomSanitizer,
        private _i18n: I18nService,
	) {}

	ngOnInit(): void {
        this.locale = this._i18n.language;
		const id = this._activatedRoute.snapshot.params["id"];
		this.post$ = this._postService
			.read(id)
			.pipe(tap((post) => console.log("post:", post)));
	}
}
