import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    { path: "", component: ListComponent, title: "title.home", data: { toolbar: 'home' } },
    //Wild Card Route for 404 request
    // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
