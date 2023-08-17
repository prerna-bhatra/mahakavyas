import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PageDocument = Chapter & Document;

@Schema()
export class Chapter extends Document {
    @Prop({ type: Types.ObjectId, ref: 'Puran', required: true })
    puranId: Types.ObjectId;

    @Prop(
        { type: String, required: true },
    )
    title: string
    @Prop(
        { type: String, required: true },
    )
    content: string

}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
