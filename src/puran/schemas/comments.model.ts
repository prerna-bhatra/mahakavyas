import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// @Schema()
// export class Mention {
//   @Prop({ type: String, required: true })
//   userId: string;

//   @Prop({ type: String, required: true })
//   commentId: string;

//   @Prop({ type: String, required: true })
//   content: string;

//   @Prop({ type: [String], default: [] })
//   mentions: string[];
// }

@Schema()
export class Comment {
  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  chapterId: string;

  // @Prop({ type: [Mention], default: [] })
  // replies: Mention[];

  // @Prop({ type: [String], default: [] })
  // mentions: string[];
}

export type CommentDocument = Comment & Document;
// export type MentionDocument = Mention & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);
// export const MentionSchema = SchemaFactory.createForClass(Mention);
