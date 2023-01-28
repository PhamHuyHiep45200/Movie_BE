import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { MovieModule } from './module/movie/movie.module';
import { RoomModule } from './module/room/room.module';

@Module({
  imports: [UserModule, MovieModule, RoomModule],
})
export class AppModule {}
