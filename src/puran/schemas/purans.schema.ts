import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PuranDocument = Puran & Document;


@Schema()
export class Puran extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  image: string;
}

export const PuranSchema = SchemaFactory.createForClass(Puran);
