import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AlertCriteriaDocument = AlertCriteria & mongoose.Document;

@Schema()
export class AlertCriteria {
  @Prop({type: mongoose.Schema.Types.ObjectId, auto:true, required: true, description: "식별자"})
  _id: string;

  @Prop({type: mongoose.Schema.Types.Number, required: true, description: "바이탈 타입 - 1 Temp 2 Pulse"})
  vitalType: number

  @Prop({type: mongoose.Schema.Types.Number, required: true, description: "relation operator 관계 연산자... 1 < 2 <= 3 > 4 >= ..."})
  ro: number

  @Prop({type: mongoose.Schema.Types.Number, required: true, description: "기준점 (관계 연상자 뒤에 들어갈 값.)"})
  point: number

  @Prop({type: mongoose.Schema.Types.Date, index:true, required: true, description: "생성일"})
  createdAt: Date;

  @Prop({type: mongoose.Schema.Types.Date, required: true, description: "수정일"})
  updatedAt: Date;
}

export const AlertCriteriaSchema = SchemaFactory.createForClass(AlertCriteria);