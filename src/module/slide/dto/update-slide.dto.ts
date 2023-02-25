import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateSlide {
  @ApiProperty()
  @IsString()
  @IsOptional()
  link: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
}
