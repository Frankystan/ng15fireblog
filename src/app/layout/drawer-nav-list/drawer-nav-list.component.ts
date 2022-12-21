import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { AuthService } from "@app/services/auth.service";

@Component({
	selector: "app-drawer-nav-list",
	templateUrl: "./drawer-nav-list.component.html",
	styleUrls: ["./drawer-nav-list.component.scss"],
})
export class DrawerNavListComponent {
	@Input() drawer!: MatDrawer;
	@Input() isHandset!: boolean;

	constructor(private _auth: AuthService, private _rtr: Router) {}

	close() {
		if (this.isHandset) this.drawer.close();
	}

	logout() {
		this._auth.logout().then((_) => this._rtr.navigate(["/auth/login"]));
	}
}
