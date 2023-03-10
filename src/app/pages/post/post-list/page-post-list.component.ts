import { Component } from "@angular/core";
import { IPost } from "@app/models/post.interface";
import { PostService } from "@app/services/post.service";
import { faker } from "@faker-js/faker/locale/es";
import { Observable, tap } from "rxjs";

@Component({
  selector: 'app-page-post-list',
  templateUrl: './page-post-list.component.html',
  styleUrls: ['./page-post-list.component.scss']
})
export class PagePostListComponent {
    // DUMMY DATA
    // list:Array<any> = Array.from({ length: 100 }).map((value, i) => {
    //     return {
    //         id: `${i + 1}`,
    //         title: `${i + 1} - ${faker.lorem.paragraph(1)}`,
	// 		author: {
    //             displayName: faker.name.fullName(),
    //             uid: faker.unique
    //         },
    //         created_at: 15000005644,
	// 		content: faker.lorem.paragraph(3),
	// 		image: faker.image.avatar(),
    //     }
    // });

    data$: Observable<IPost[]> = this.postService.list();

	constructor(private postService: PostService) {
        this.data$.pipe(tap(posts => console.log("posts: ",posts)
        ))

    }
}
