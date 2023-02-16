import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { MovieModule } from './module/movie/movie.module';
import { RoomModule } from './module/room/room.module';
import { UploadFileModule } from './upload-file/upload-file.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, MovieModule, RoomModule, UploadFileModule, CategoryModule],
})
export class AppModule {}
