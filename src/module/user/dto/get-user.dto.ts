import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

// enum TypeUser {
//   False,
//   True=True,
// }

export class GetUserDto {
  @IsOptional()
  @ApiProperty({ required: false })
  nameUser: string;

  @IsOptional()
  @ApiProperty({ required: false })
  phone: string;

  @IsOptional()
  @ApiProperty({ required: false })
  email: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  skip: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  take: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    return false;
  })
  deleteFlg: boolean;
}
