import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@app/services/auth.service";
import { I18nService } from "@app/services/i18n.service";
import { NotificationService } from "@app/services/notification.service";
import { PasswordValidator } from "@app/validators/match-password.validator";


/*
https://youtu.be/F4imGe2HrVs
https://youtu.be/F4imGe2HrVs?t=429

*/

@Component({
  selector: "app-page-register",
  templateUrl: "./page-register.component.html",
  styleUrls: ["./page-register.component.scss"]
})
export class PageRegisterComponent {
    hide: boolean = true;

    form!: FormGroup;

    constructor(
        private _auth: AuthService,
        private _rtr: Router,
        private _ntf: NotificationService,
        public i18n: I18nService,
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    private createForm() {
        const regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        const urlPattern: string = "^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$";
        const emailRegex = "^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";

        this.form = new FormGroup(
            {
                displayName: new FormControl("", [Validators.required]),
                email: new FormControl("", [Validators.required, Validators.email]),
                photoURL: new FormControl("", [Validators.pattern(regex)]),

                password: new FormControl("123456", {
                    validators: [Validators.required, Validators.minLength(6)],
                    updateOn: "blur"
                }),
                password_confirm: new FormControl("123456", {
                    validators: [Validators.required],
                    updateOn: "blur"
                }),
                // recaptcha: new FormControl("", Validators.required),
            }, PasswordValidator.MatchPassword
        );

    }

    errorHandling = (control: string, error: string) => {
        return this.form.controls[control].hasError(error);
    }

    save() {
        this._auth.register(this.form.value)
            .then(_ => {
                this._ntf.open("toast.register");
                this._rtr.navigate(["/posts"]);
            });;
    }

}
