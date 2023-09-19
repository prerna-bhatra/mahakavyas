import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
    constructor(private storyService: StoriesService){
    }

    @Post()
    async create(@Body() body :{title :string , content:string}){
        const {title , content} = body;
        return this.storyService.create({title , content})
    }


    @Get()
    async read(@Query() query :{page :string , limit:string}){
        const {page , limit} = query;
        return this.storyService.read({page , limit})
    }
}
