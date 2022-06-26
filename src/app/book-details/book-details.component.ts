import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BooksService } from '../books.service';
import Book from '../book';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  title = 'Book Details';
  book: any;
  constructor(private route: ActivatedRoute, private bs: BooksService, private location: Location) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bs
      .getBooks()
      .subscribe(data => {
        const response = JSON.parse(data);
        for (let index = 0; index < response.length; index++) {
          if(response[index].bookId === id){
            const element = response[index];
            this.book = new Book(element.bookId, element.title, element.authors, element.editorial, element.short_description);
          }         
        }
      });
  }
}
