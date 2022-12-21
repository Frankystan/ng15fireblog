import { Component, OnInit, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { filter, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { I18nService } from "./services/i18n.service";
import { environment } from "@env/environment";
import { TranslateService } from "@ngx-translate/core";
import { NavigationEnd, Router } from "@angular/router";
import { CustomTitleStrategy } from "./services/custom-title-strategy";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

    @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

    private _destroy = new Subject<void>();

	readonly isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.XSmall)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private _i18n: I18nService,
        private translateService: TranslateService,
        private _router: Router,
        private _ctitles: CustomTitleStrategy,
	) {}

	ngOnInit(): void {

		// Setup translations
		this._i18n.init(
			environment.defaultLanguage,
			environment.supportedLanguages
		);

		// set title
		merge(
			this.translateService.onLangChange,
			this._router.events.pipe(
				filter((event) => event instanceof NavigationEnd)
			)
		)
			.pipe(
				map((_) => this._router.routerState.snapshot),
				takeUntil(this._destroy)
			)
			.subscribe((snapshot) => {
				this._ctitles.updateTitle(snapshot);
			});
	}
}
