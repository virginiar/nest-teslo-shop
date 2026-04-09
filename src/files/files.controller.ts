import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import 'multer';
import type { Express } from 'express';
import { fileFilter } from './helpers/fileFilter.helper';
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      // limits: { fileSize: 1000, }
      storage: diskStorage({
        destination: './static/products',
      }),
    }),
  )
  uploadProductFile(@UploadedFile() file: Express.Multer.File) {
    // console.log(file.originalname);
    if (!file) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    return 'Hola mundo';
  }
}
