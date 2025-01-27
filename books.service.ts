import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { BookStatus } from './book-status.enum'

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

  updateStatus(id: string): Book {
      const book = this.findById(id);
      book.status = BookStatus.LENT_OUT;
      return book;
    }
  delete(id: string): void{
    const initialLength = this.books.length;
    this.books = this.books.filter((book) => book.id !== id);
     if (this.books.length === initialLength) {
         throw new Error('Book with ID ${id} not found');

       }

    }
}

