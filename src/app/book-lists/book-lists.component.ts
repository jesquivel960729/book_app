import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksService } from '../books.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import Book from '../book';
import { Router } from '@angular/router'; 
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent implements OnInit {
  title = 'Book List';
  columnas: string[] = ['bookId', 'title', 'authors','editorial', 'short_description'];
  books: Book [] = [];
  dataSource:any
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor(private bs:BooksService, private rt: Router) {
    
  }
      
  //selectedBook: Hero;
  //onSelect(book: Book): void {
  //  this.selectedBook = book;
  //}
  ngOnInit(): void {
    this.bs
      .getBooks()
      .subscribe(data => {
        const response = JSON.parse(data);
        for (let index = 0; index < response.length; index++) {
          const element = response[index];
          var a = new Book(element.bookId, element.title, element.authors, element.editorial, element.short_description);
          this.books.push(a)
        }
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.sort = this.sort;
      });    
  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  getRecord(book: Book){
    console.log(book);
    this.rt.navigate(['book-details/'+book.bookId]);
  }
}


