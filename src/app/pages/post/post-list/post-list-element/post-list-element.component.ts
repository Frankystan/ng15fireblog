import { Component, Input } from "@angular/core";
import { IPost } from "@app/models/post.interface";

@Component({
	selector: "app-post-list-element",
	templateUrl: "./post-list-element.component.html",
	styleUrls: ["./post-list-element.component.scss"],
})
export class PostListElementComponent {
    @Input() post!: IPost;
}
