import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PatientDocument = Patient & mongoose.Document;

@Schema()
export class Patient {
  @Prop({type: mongoose.Schema.Types.ObjectId, index:true, auto:true, required: true, description: "식별자"})
  _id: string;

  @Prop({type: mongoose.Schema.Types.String, required: true, description: "아무것도 안넣으니 너무 삭막해서 추가."})
  name: string;

  @Prop({type: mongoose.Schema.Types.Date, index:true, required: true, description: "생성일"})
  createdAt: Date;

  @Prop({type: mongoose.Schema.Types.Date, required: true, description: "수정일"})
  updatedAt: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);