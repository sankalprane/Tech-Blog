import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReadArticleComponent } from './read-article/read-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BloglistComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ReadArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
