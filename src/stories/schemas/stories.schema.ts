import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type StoryDocument = Story & Document;

@Schema()
export class Story extends Document {
    @Prop(
        { type: String, required: true },
    )
    title: string

    @Prop(
        { type: String, required: true },
    )
    content: string

}

export const StorySchema = SchemaFactory.createForClass(Story);
