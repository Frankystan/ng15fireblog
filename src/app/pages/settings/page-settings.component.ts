import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router,  ActivatedRoute } from '@angular/router';
import { ISettings } from '@app/models/settings.interface';
import { IUser } from '@app/models/user.interface';
import { AuthService } from '@app/services/auth.service';
import { CustomTitleStrategy } from '@app/services/custom-title-strategy';
import { I18nService } from '@app/services/i18n.service';
import { SettingsService } from '@app/services/settings.service';
import { Subject, Observable, pipe } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent implements OnInit , OnDestroy {

    private _destroy = new Subject<void>();
    ischecked!: boolean;

    form!: FormGroup;
    user$!: Observable<IUser>;
    user!: IUser;
    title!: string;

    constructor(
        private _i18n: I18nService,
        private _settingsService: SettingsService,
        private _auth: AuthService,
        private _router: Router,
        private activatedRoute: ActivatedRoute,

        private _ctitles: CustomTitleStrategy,
    ) { }

    ngOnInit(): void {
        this.form = this._settingsService.form;


        this.user$ = this._auth.loggedInUser$.pipe(tap(user => {
            let set: any = user.settings;
            this.form.patchValue(set);
            this.user = user;
            this.ischecked = set.darkTheme;
            this._i18n.language = this.form.get('language')?.value;
        }));

    }


    onChange(value: MatSlideToggleChange) {
        this.ischecked = value.checked;
    }

    save() {
        const NUser = {
            ...this.user,
            settings: this.form.value
        };

        this._settingsService.save(NUser);

    }

    get language(): string {
        return this._i18n.language;
    }

    get languages(): any {
        return this._i18n.supportedLanguages;
    }

    ngOnDestroy(): void {
        this._destroy.next();
    }

}
