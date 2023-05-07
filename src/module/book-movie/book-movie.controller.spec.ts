import { Test, TestingModule } from '@nestjs/testing';
import { BookMovieController } from './book-movie.controller';

describe('BookMovieController', () => {
  let controller: BookMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookMovieController],
    }).compile();

    controller = module.get<BookMovieController>(BookMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
