import { Test, TestingModule } from '@nestjs/testing';
import { ShowtimeMovieController } from './showtime-movie.controller';

describe('ShowtimeMovieController', () => {
  let controller: ShowtimeMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowtimeMovieController],
    }).compile();

    controller = module.get<ShowtimeMovieController>(ShowtimeMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
