import { Component } from "@angular/core";
import { faker } from "@faker-js/faker/locale/es";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.scss"],
})
export class ListComponent {

    list:Array<any> =[];

	constructor() {
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
