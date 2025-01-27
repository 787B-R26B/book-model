import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookStatus } from './book-status.enum';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body('id') id: string, @Body('name') name: string): Book {
      const book: Book = {
          id,
          name,
          status: BookStatus.RENTABLE,

        };
        return this.booksService.create(book);

    }
}
