import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BookListsComponent } from './book-lists/book-lists.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksService } from './books.service';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    BookListsComponent,
    BookDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'book-details/:id', component: BookDetailsComponent},
      {path: 'book-lists', component: BookListsComponent},
      {path: '', redirectTo: '/book-lists', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
