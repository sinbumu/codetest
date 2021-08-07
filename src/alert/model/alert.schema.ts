import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AlertCriteria } from '../../alert-criteria/model/alert-criteria.schema';

export type AlertDocument = Alert & mongoose.Document;

@Schema()
export class Alert {
  @Prop({type: mongoose.Schema.Types.ObjectId, auto:true, required: true, description: "식별자"})
  _id: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, index:true, required: true, description: "환자 식별값"})
  patientId: string;
  
  @Prop({type: AlertCriteria, required: true, description: "AlertCriteria(경고 발생기준) 서브 도큐먼트."})
  acInfo: AlertCriteria

  @Prop({type: mongoose.Schema.Types.Date, index:true, required: true, description: "생성일"})
  createdAt: Date;

  @Prop({type: mongoose.Schema.Types.Date, required: true, description: "수정일"})
  updatedAt: Date;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);