import { Test, TestingModule } from '@nestjs/testing';
import { BookMovieDetailService } from './book-movie-detail.service';

describe('BookMovieDetailService', () => {
  let service: BookMovieDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookMovieDetailService],
    }).compile();

    service = module.get<BookMovieDetailService>(BookMovieDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
