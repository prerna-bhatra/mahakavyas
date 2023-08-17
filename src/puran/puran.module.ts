import { Module } from '@nestjs/common';
import { PuranController } from './puran.controller';
import { PuranService } from './puran.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Puran, PuranSchema } from './schemas/purans.schema';
import { Chapter, ChapterSchema } from './schemas/chapters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Puran.name, schema: PuranSchema },
      { name: Chapter.name, schema: ChapterSchema },

    ])
  ],
  controllers: [PuranController],
  providers: [PuranService]
})
export class PuranModule { }
