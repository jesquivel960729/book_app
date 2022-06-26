export default class Book {
    bookId: number;
    title: string;
    authors: [];
    editorial: string;
    short_description: string
    constructor(public _bookId: number, public _title: string, public _authors: [], public _editorial: string, public _short_description: string) {
        this.bookId = _bookId;
        this.title =_title;
        this.authors = _authors;
        this.editorial = _editorial;
        this.short_description = _short_description;
    }
  }