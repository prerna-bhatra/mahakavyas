import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {

    constructor(private commentService: CommentService) { }

    @Post()
    async create(@Body() body: { userId: string, chapterId: string, content: string }) {
        const { userId, chapterId, content } = body
        return this.commentService.create({ userId, chapterId, content })
    }

    @Post('comments')
    async readComment(@Body() body: { chapterId }) {
        const { chapterId } = body;

        return await this.commentService.readComments({ chapterId })
    }
}
