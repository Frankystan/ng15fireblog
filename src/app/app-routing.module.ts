import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate, AuthGuard } from '@angular/fire/auth-guard';
import { PagePostComponent } from "./pages/post/page-post.component";
import { PagePostFormComponent } from "./pages/post/post-form/page-post-form.component";
import { PagePostListComponent } from "./pages/post/post-list/page-post-list.component";
import { PagePostShowComponent } from "./pages/post/post-show/page-post-show.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/posts']);

const routes: Routes = [
	{
		path: "",
		component: PagePostListComponent,
		title: "title.home",
		data: { toolbar: "home" },
	},

    {
        path: "posts",
        component: PagePostComponent,
        // ...canActivate(redirectUnauthorizedToLogin),

        children: [
            {
                path: "",
                component: PagePostListComponent,
                title: "title.posts.list",
            },
            {
                path: "create",
                component: PagePostFormComponent,
                // canDeactivate: [DiscardChangesGuard],
                title: "title.posts.create"
            },
            // {
            //     path: "search",
            //     component: PageSearchComponent,
            //     ...canActivate(redirectUnauthorizedToLogin),
            //     // canActivate: [AuthGuard],
            //     title: "title.search",
            // },
            {
                path: ":id",
                component: PagePostShowComponent,
                title: "title.posts.show"
            },
            {
                path: ":id/edit",
                component: PagePostFormComponent,
                // canDeactivate: [DiscardChangesGuard],
                title: "title.posts.edit"
            }],

    },

	//Wild Card Route for 404 request
	// { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
