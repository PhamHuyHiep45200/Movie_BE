import { Test, TestingModule } from '@nestjs/testing';
import { BookMovieService } from './book-movie.service';

describe('BookMovieService', () => {
  let service: BookMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookMovieService],
    }).compile();

    service = module.get<BookMovieService>(BookMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
