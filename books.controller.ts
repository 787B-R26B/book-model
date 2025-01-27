import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { BookStatus } from './book-status.enum';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(){
      return this.booksService.findAll();
    }

  @Get(':id')
  findById(@Param('id') id: string): Book {
    return this.booksService.findById(id);

    }

  @Post()
  create(@Body('id') id: string, @Body('name') name: string): Book {
      const book: Book = {
          id,
          name,
          status: BookStatus.RENTABLE,

        };

        return this.booksService.create(book);

    }

  @Patch(':id')
  updateStatus(@Param('id') id: string): Book {
      return this.booksService.updateStatus(id);

    }
}
