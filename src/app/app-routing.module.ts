import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReadArticleComponent } from './read-article/read-article.component';

const routes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', component: BloglistComponent },
    { path: 'create-article', component: CreateArticleComponent },
    { path: 'edit-article/:id', component: EditArticleComponent },
    { path: 'read-article/:id', component: ReadArticleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }