import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Story } from './schemas/stories.schema';

@Injectable()
export class StoriesService {
    constructor(
        @InjectModel('Story') private readonly storyModel: Model<Story>
    ) { }

    async create({ title, content }) {
        try {
            const saveStory = await this.storyModel.create({
                title,
                content
            })

            return {
                saveStory
            }

        } catch (error) {
            throw error;
        }
    }

    async read({ page, limit }) {
        try {
            page = parseInt(page);
            limit = parseInt(limit);

            const totalCount = await this.storyModel.countDocuments(); // Get the total count of documents

            const totalPages = Math.ceil(totalCount / limit);


            const skip = (page - 1) * limit;
            const results = await this.storyModel
                .find()
                .skip(skip)
                .limit(limit)
                .exec();

            return {
                totalPages,
                results
            };
        } catch (error) {
            throw error;
        }
    }

}
