import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { MovieModule } from './module/movie/movie.module';
import { RoomModule } from './module/room/room.module';
import { UploadFileModule } from './module/upload-file/upload-file.module';

@Module({
  imports: [UserModule, MovieModule, RoomModule, UploadFileModule],
})
export class AppModule {}
