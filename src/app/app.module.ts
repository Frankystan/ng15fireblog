import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomMaterialModule } from "./modules/custom-material.module";


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomMaterialModule,

	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
