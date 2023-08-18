import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { PuranService } from './puran.service';

@Controller('puran')
export class PuranController {

    constructor(private puranservice: PuranService) { }
    @Post()
    async create(@Body() puranBody) {
        return await this.puranservice.addPuran(puranBody)

    }


    @Get()
    async purans() {
        return await this.puranservice.getAllPurans()
    }

    @Post('chapter')
    async createChapter(@Body() chapterBody) {
        return await this.puranservice.addChapter(chapterBody)

    }

    @Post('chapterByPuran')
    async chaptersByPuranId(@Body() chapterBody) {
        const { puranId } = chapterBody;
        return await this.puranservice.getChaptersByPuranId(puranId)
    }

    @Post('chapterById')
    async chapterById(@Body() chapterBody) {
        const { chapterId } = chapterBody;
        return await this.puranservice.getChaptersById(chapterId)

    }


}
