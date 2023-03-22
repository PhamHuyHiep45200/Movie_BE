import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetCategoryDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  skip?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  take?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
}
