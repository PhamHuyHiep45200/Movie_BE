import { Test, TestingModule } from '@nestjs/testing';
import { BookMovieDetailController } from './book-movie-detail.controller';

describe('BookMovieDetailController', () => {
  let controller: BookMovieDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookMovieDetailController],
    }).compile();

    controller = module.get<BookMovieDetailController>(BookMovieDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
