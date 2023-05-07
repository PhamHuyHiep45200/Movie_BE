import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { MovieModule } from './module/movie/movie.module';
import { RoomModule } from './module/room/room.module';
import { UploadFileModule } from './module/upload-file/upload-file.module';
import { CategoryModule } from './module/category/category.module';
import { SlideModule } from './module/slide/slide.module';
import { ShowtimeMovieModule } from './module/showtime-movie/showtime-movie.module';
import { CouponModule } from './coupon/coupon.module';
import { CouponModule } from './module/coupon/coupon.module';
import { BookMvieModule } from './module/book-mvie/book-mvie.module';
import { BookMovieModule } from './module/book-movie/book-movie.module';
import { BookMovieDetailModule } from './module/book-movie-detail/book-movie-detail.module';

@Module({
  imports: [
    UserModule,
    MovieModule,
    RoomModule,
    UploadFileModule,
    CategoryModule,
    SlideModule,
    ShowtimeMovieModule,
    CouponModule,
    BookMvieModule,
    BookMovieModule,
    BookMovieDetailModule,
  ],
})
export class AppModule {}
