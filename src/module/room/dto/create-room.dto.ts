import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  numberChair: number;

  @ApiProperty({ default: false })
  @IsOptional()
  deleteFlg?: boolean;
}
