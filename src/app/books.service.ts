import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  uri = '../assets/json/books_source.json';
  constructor(private http:HttpClient) { 
  }
  getBooks() {
    return this
           .http
           .get(`${this.uri}`, {responseType: 'text'});
  }
  getBook(bookId: string){

  }

}
