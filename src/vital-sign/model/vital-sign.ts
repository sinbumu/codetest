import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type VitalSignDocument = VitalSign & mongoose.Document;

@Schema()
export class VitalSign {
  @Prop({type: mongoose.Schema.Types.ObjectId, auto:true, required: true, description: "식별자"})
  _id: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, index:true, required: true, description: "환자 식별값"})
  patientId: string;

  @Prop({type: mongoose.Schema.Types.Number, required: true, description: "타입 - 0 Temp 1 Pulse"})
  type: number
  
  @Prop({type: mongoose.Schema.Types.Number, required: true, description: "해당 타입에 대한 값"})
  value: number

  @Prop({type: mongoose.Schema.Types.Date, index:true, required: true, description: "생성일"})
  createdAt: Date;

  @Prop({type: mongoose.Schema.Types.Date, required: true, description: "수정일"})
  updatedAt: Date;
}

export const VitalSignSchema = SchemaFactory.createForClass(VitalSign);