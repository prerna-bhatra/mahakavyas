import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User extends Document {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    name: string;

    @Prop({ default: null })
    otpCode: string; // Store OTP code here for verification

    @Prop({ default: false })
    isVerified: boolean; // To track email verification status
}

export const UserSchema = SchemaFactory.createForClass(User);
