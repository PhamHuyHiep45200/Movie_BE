import { Test, TestingModule } from '@nestjs/testing';
import { ShowtimeMovieService } from './showtime-movie.service';

describe('ShowtimeMovieService', () => {
  let service: ShowtimeMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowtimeMovieService],
    }).compile();

    service = module.get<ShowtimeMovieService>(ShowtimeMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
