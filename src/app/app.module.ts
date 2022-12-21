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
import { DrawerNavListComponent } from './layout/drawer-nav-list/drawer-nav-list.component';
import { PageLoginComponent } from './pages/auth/login/page-login.component';
import { PageRegisterComponent } from './pages/auth/register/page-register.component';
import { PageForgottenPasswordComponent } from './pages/auth/forgotten-password/page-forgotten-password.component';
import { PageEmailVerifiedComponent } from './pages/auth/email-verified/page-email-verified.component';
import { PageAuthComponent } from "./pages/auth/auth.component";

@NgModule({
	declarations: [
		AppComponent,
        AutoFocusDirective,
        AutofoqusDirective,
        DrawerNavListComponent,
        FabCreatePostComponent,
        FabEditPostComponent,
        PageAuthComponent,
        PageEmailVerifiedComponent,
        PageForgottenPasswordComponent,
        PageLoginComponent,
        PagePostComponent,
        PagePostFormComponent,
        PagePostListComponent,
        PagePostShowComponent,
        PageRegisterComponent,
        PostListElementComponent,
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
