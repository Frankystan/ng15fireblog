import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CustomFirebaseModule } from "./modules/custom-firebase.module";
import { CustomMaterialModule } from "./modules/custom-material.module";
import { CustomTranslateModule } from "./modules/custom-translate.module";
import { MomentModule } from "ngx-moment";
import { NgxTinymceModule } from 'ngx-tinymce';
import { PagePostListComponent } from "./pages/post/post-list/page-post-list.component";
import { PagePostShowComponent } from "./pages/post/post-show/page-post-show.component";
import { PostListElementComponent } from "./pages/post/post-list/post-list-element/post-list-element.component";
import { TitleStrategy } from "@angular/router";
import { CustomTitleStrategy } from "./services/custom-title-strategy";
import { PagePostFormComponent } from './pages/post/post-form/page-post-form.component';
import { PagePostComponent } from './pages/post/page-post.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FabCreatePostComponent } from "./layout/fab-create-post/fab-create-post.component";
import { FabEditPostComponent } from "./layout/fab-edit-post/fab-edit-post.component";
import { AutoFocusDirective } from './directives/autofocus.directive';
import { AutofoqusDirective } from './directives/autofoqus.directive';
import { CustomTinymceModule } from "./modules/custom-tinymce.module";
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
	declarations: [
		AppComponent,
        PagePostListComponent,
        PostListElementComponent,
        PagePostShowComponent,
        PagePostFormComponent,
        PagePostComponent,
        FabCreatePostComponent,
        FabEditPostComponent,
        AutoFocusDirective,
        AutofoqusDirective,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CustomMaterialModule,
		CustomFirebaseModule,
        CustomTranslateModule,
        CustomTinymceModule,
        EditorModule,
		MomentModule,
        FormsModule,
        ReactiveFormsModule,
        NgxTinymceModule,
	],
	providers: [
        { provide: TitleStrategy, useClass: CustomTitleStrategy }
    ],
	bootstrap: [AppComponent],
})
export class AppModule {}
