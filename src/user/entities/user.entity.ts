import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type UserDocument = User & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
//49f68a5c8493ec2c0bf489821c21fc3b
//49f68a5c8493ec2c0bf489821c21fc3b
//50b45535a01e52f6e9c3dd144df5e2e7
//5bb7341604e5c113960e1f0b1cd87ba7
// 1m
//"$2b$10$txz2foiucMbmqL2tzv67femxRyCszqwW85C3FlHX4khdczubS/Nl.",
//"$2b$10$DLoHFDbuRES1BnT0oslJBONCRBPSNbjfbB4o.Iys1/.jtIZprbJ6y",
export class User {
  @Prop({ required: false, index: false, unique: false })
  name: string;
  @Prop({ required: true, index: true, unique: true })
  email: string;
  @Prop({ required: true, index: true, unique: true })
  username: string;
  @Prop({ required: true, index: false, unique: false, select: false })
  password: string;
  @Prop({ default: null, type: mongoose.Schema.Types.Mixed })
  device: object;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const UserFeature = { name: User.name, schema: UserSchema };
