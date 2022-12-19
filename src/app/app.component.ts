import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { faker } from "@faker-js/faker/locale/es";



@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {

    list:Array<any> =[];
	readonly isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.XSmall)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	constructor(private breakpointObserver: BreakpointObserver) {
        this.createList(10);
	}

	createList(numUsers: number) {
		this.list = Array.from({ length: numUsers }, this.createUser);
		console.log(this.list);
	}

	createUser = () => {
		return {
			name: faker.name.firstName(),
			email: faker.internet.email(),
			address: faker.address.streetAddress(),
			bio: faker.lorem.paragraph(3),
			image: faker.image.avatar(),
		};
	};

}
