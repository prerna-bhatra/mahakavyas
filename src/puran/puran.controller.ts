import { Body, Controller, Post, Req } from '@nestjs/common';
import { PuranService } from './puran.service';

@Controller('puran')
export class PuranController {

    constructor(private puranservice: PuranService) { }
    @Post()
    async create(@Body() puranBody, @Req() request: Request) {
        return await this.puranservice.addPuran(puranBody)

    }

    @Post('chapter')
    async createChapter(@Body() chapterBody, @Req() request: Request) {
        return await this.puranservice.addChapter(chapterBody)

    }

    @Post('chapterByPuran')
    async chaptersByPuranId(@Body() chapterBody, @Req() request: Request) {
        const { puranId } = chapterBody;
        return await this.puranservice.getChaptersByPuranId(puranId)
    }

    @Post('chapterById')
    async chapterById(@Body() chapterBody, @Req() request: Request) {
        const { chapterId } = chapterBody;
        return await this.puranservice.getChaptersById(chapterId)

    }


}
