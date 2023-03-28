import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type PostDocument = Post & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Post {
  @Prop({ required: false, index: false, unique: false })
  title: string;
  @Prop({ required: false, index: true, unique: true })
  description: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
export const PostFeature = { name: Post.name, schema: PostSchema };
