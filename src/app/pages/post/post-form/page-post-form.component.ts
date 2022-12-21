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
import { distinctUntilChanged, map, Observable, Subject, takeUntil } from "rxjs";

/*
https://www.angularfix.com/2022/01/angular-2-material-mat-chip-list.html
https://stackblitz.com/edit/angular-4d5vfj-gywxjz?file=app%2Fchip-list-validation-example.ts
https://www.lindseybroos.be/2020/06/angular-material-chiplist-with-autocomplete-and-validation/
https://jasonwatmore.com/post/2020/09/02/angular-combined-add-edit-create-update-form-example

*/

@Component({
	selector: "app-page-post-form",
	templateUrl: "./page-post-form.component.html",
	styleUrls: ["./page-post-form.component.scss"],
})
export class PagePostFormComponent implements OnInit, OnDestroy {
	@ViewChild("chipGrid", { static: true }) chipGrid!: MatChipGrid;

	private destroy = new Subject<void>();
	form: FormGroup = this.postService.form;
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

		this.id = this._route.snapshot.params["id"];
		this.isAddMode = !this.id;

		if (!this.isAddMode) {
			this.postService
				.read(this.id)
				.pipe(takeUntil(this.destroy))
				.subscribe((post) => {
					this.form.patchValue(post);

					this.form.setControl(
						"tags",
						this._fb.array(post.tags || [])
					);
				});
		}
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

    errorHandling = (control: string, error: string) => {
        return this.form.controls[control].hasError(error);
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
