import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  findAll() {
      return this.books;
    }

    findById(id: string): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
        throw new Error('Book With ID ${id} not found');
      }
      return book;

      }

  create(book: Book){
      this.books.push(book);
      return book;

    }
  }
