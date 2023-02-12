import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { S3 } from 'aws-sdk';

@Injectable()
export class UploadFileService {
  constructor(private prisma: PrismaService) {}
  async uploadFile(dataBuffer: Buffer, fileName: string): Promise<any> {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: dataBuffer,
        Key: `${Math.random()}-${fileName}`,
      })
      .promise();

    const fileStorageInDB = {
      fileName: fileName,
      fileUrl: uploadResult.Location,
      key: uploadResult.Key,
    };

    // const filestored = await this.prisma.fileEntity.create({
    //   data: fileStorageInDB,
    // });

    return fileStorageInDB;
  }
}
