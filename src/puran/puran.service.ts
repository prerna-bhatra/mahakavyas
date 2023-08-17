import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Puran } from './schemas/purans.schema';
import { Chapter } from './schemas/chapters.schema';

@Injectable()
export class PuranService {
    constructor(
        @InjectModel('Puran') private readonly puranModel: Model<Puran>,
        @InjectModel('Chapter') private readonly chapterModel: Model<Chapter>

    ) { }

    async addPuran({ name, description, image }) {
        try {
            if (!name || name.length < 0 || !description || description.length < 0) {
                return {
                    success: false,
                    message: "invalid name or parts"
                }
            }
            const isExistsPuran = await this.puranModel.findOne({ name });
            if (isExistsPuran) {
                return {
                    success: false,
                    message: `${name}  exists already`
                }
            }
            const savePuran = await this.puranModel.create({
                name,
                description
            })

            console.log({ savePuran });

            return {
                success: true
            }


        } catch (error) {
            throw error
        }

    }

    async addChapter({
        puranId,
        title,
        content
    }) {

        try {

            if (!title || !title.length || !content || !content.length) {
                return {
                    success: false,
                    "message": "something went wrong"
                }
            }

            const saveChapter = await this.chapterModel.create({
                puranId,
                title,
                content
            })


            console.log({ saveChapter });



        } catch (error) {
            throw error

        }

    }


    async addChaptersInBulk(
        {
            puranId,
            chapters
        }
    ) {

    }

    async getChaptersByPuranId(
        puranId
    ) {
        try {
            const chapters = await this.chapterModel.find({puranId})
            return {
                data:chapters,
                success:true
            }

        } catch (error) {
            throw error;

        }

    }

    async getChaptersById(
        chapterId
    ) {
        try {
            const chapter = await this.chapterModel.find({_id:chapterId})
            return {
                data:chapter,
                success:true
            }

        } catch (error) {
            throw error;

        }

    }
}
