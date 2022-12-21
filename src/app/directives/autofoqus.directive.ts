import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[autofoqus]",
})
export class AutofoqusDirective {
	constructor(private el: ElementRef<HTMLElement>) {}

	ngAfterContentInit() {
		setTimeout(() => this.el.nativeElement.focus());
	}
}
