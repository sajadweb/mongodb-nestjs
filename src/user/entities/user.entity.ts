import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type UserDocument = User & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({ required: false, index: false, unique: false })
  name: string;
  @Prop({ required: true, index: true, unique: true })
  email: string;
  @Prop({ required: true, index: true, unique: true })
  username: string;
  @Prop({ required: true, index: false, unique: false })
  password: string;
  @Prop({ default: null, type: mongoose.Schema.Types.Mixed })
  device: object;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const UserFeature = { name: User.name, schema: UserSchema };
