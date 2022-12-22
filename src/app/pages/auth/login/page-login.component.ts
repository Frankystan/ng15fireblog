import { Component } from "@angular/core";
import {
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@app/services/auth.service";
import { distinctUntilChanged } from "rxjs";

@Component({
	selector: "app-page-login",
	templateUrl: "./page-login.component.html",
	styleUrls: ["./page-login.component.scss"],
})
export class PageLoginComponent {
	hide: boolean = true;
	form!: FormGroup;

	constructor(public auth: AuthService, private _rtr: Router) {}

	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl("fffernandez84@gmail.com", [
				Validators.required,
				Validators.email,
			]),
			password: new FormControl("123456", Validators.required),
			// recaptcha: new FormControl("", Validators.required),
		});

		this.form.statusChanges
			.pipe(distinctUntilChanged())
			.subscribe((status) => console.log("form status:", status));
	}

	getErrorMessage(control: string) {
		let errors = <Object>this.form.controls[control].errors;

		let key = Object.keys(errors)[0];

		switch (key) {
			case "required":
				return "validation.required";
			case "email":
				return "validation.email";
			case "minlength":
				return "validation.minlength";
			case "pwdMatch":
				return "validation.pwd_match";
			case "pattern":
				return "validation.url";
			default:
				return "";
		}
	}

	save() {
		this.auth
			.login(this.form.value.email, this.form.value.password)
			.then((_) => this._rtr.navigate(["/posts"]));
	}

	socialLogin(provider: string) {
		this.auth
			.socialLogin(provider)
			.then((_) => this._rtr.navigate(["/posts"]));
	}
}
