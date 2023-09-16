import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentService {

    constructor(
        @InjectModel('Puran') private readonly commentModel: Model<Comment>,
    ) { }

    async create({ userId, content, chapterId }) {
        try {
            if (!content.trim().length || !chapterId) {
                return {
                    success: false,
                    message: "Invalid Req"
                }
            }

            const saveComment = await this.commentModel.create({
                userId, content, chapterId
            })

            console.log({ saveComment });
        } catch (error) {
            throw error
        }
    }

    async readComments({ chapterId }) {
        try {
            const Chaptercomments = await this.commentModel.find({ chapterId })

            console.log({ Chaptercomments });

            return {
                success: true,
                data: Chaptercomments
            }

        } catch (error) {
            throw error
        }

    }

}
