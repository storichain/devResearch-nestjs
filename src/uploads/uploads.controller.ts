import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';

const BUCKET_NAME = 'kimchinubereats123111';

@Controller('uploads')
export class UploadsController {
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    AWS.config.update({
      credentials: {
        accessKeyId: '123123',
        secretAccessKey: '123333222asd',
      },
    });
    try {
      // const objectName = `${Date.now() + file.originalname}`;
      // await new AWS.S3()
      //   .putObject({
      //     Body: file.buffer,
      //     Bucket: BUCKET_NAME,
      //     Key: objectName,
      //     ACL: 'public-read',
      //   })
      //   .promise();
      // const url = `https://${BUCKET_NAME}.s3.amazonaws.com/${objectName}`;
      // return { url };
      const upload = await new AWS.S3().createBucket({
        Bucket: BUCKET_NAME,
      });
      console.log(upload);
      console.log(file);
    } catch (e) {
      return null;
    }
  }
}
