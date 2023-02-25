import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateSlide {
  @ApiProperty()
  @IsString()
  link: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
}
