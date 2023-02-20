import { ApiProperty } from '@nestjs/swagger';

export class UpLoadFileMutipleDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[];
}
