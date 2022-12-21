import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
	MatChipGrid,
	MatChipInputEvent,
	MatChipListbox,
} from "@angular/material/chips";
import { ActivatedRoute } from "@angular/router";
import { I18nService } from "@app/services/i18n.service";
import { PostService } from "@app/services/post.service";
import { Subject, takeUntil } from "rxjs";

@Component({
	selector: "app-page-post-form",
	templateUrl: "./page-post-form.component.html",
	styleUrls: ["./page-post-form.component.scss"],
})
export class PagePostFormComponent implements OnInit, OnDestroy {
	@ViewChild("chipGrid", { static: true }) chipGrid!: MatChipGrid;

	private destroy = new Subject<void>();
	form!: FormGroup;
	isAddMode: boolean = false;
	id!: string;
	addOnBlur = true;

    options: any = {
        'language': this._i18n.language.slice(0, 2)
    };

	constructor(
		private postService: PostService,
		private _fb: FormBuilder,
		private _route: ActivatedRoute,
        private _i18n: I18nService,
	) {}

	ngOnInit(): void {
		this.createForm();

		this.id = this._route.snapshot.params["id"];
		this.isAddMode = !this.id;

		if (!this.isAddMode) {
			this.postService
				.read(this.id)
				.pipe(takeUntil(this.destroy))
				.subscribe((post) => {
					this.form.patchValue(post);
					// this.form.controls['featured_image'].setValue("");
					this.form.setControl(
						"tags",
						this._fb.array(post.tags || [])
					);
				});
		}

		// this.form
		// 	.get("tags")
		// 	?.statusChanges.pipe(takeUntil(this.destroy))
		// 	.subscribe(
		// 		(status) => (this.chipList.errorState = status === "INVALID")
		// 	);
	}

	private createForm() {
		this.form = this.postService.form;
	}

	add(event: MatChipInputEvent): void {
		const input = event.chipInput?.inputElement;

		const value = event.value;

		// Add tag
		if ((value || "").trim()) {
			this.tags.push(new FormControl(value.trim()));
		}

		// Reset the input value
		if (input) {
			input.value = "";
		}
	}

	remove(index: any) {
		this.tags.removeAt(index);
	}

	get tags(): FormArray {
		return <FormArray>this.form.get("tags");
	}

	save() {
		console.log("guardado:", this.form.value);

		// if (this.isAddMode) {
		// 	this.postService.create(this.form.value);
		// } else {
		// 	this.postService.update(this.form.value);
		// }
	}

	ngOnDestroy(): void {
		this.destroy.next();
	}
}
