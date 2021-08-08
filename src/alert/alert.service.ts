import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlertCriteria, AlertCriteriaDocument } from '../alert-criteria/model/alert-criteria.schema';
import { PatientWithAlertByDateRangeDTO } from '../patient/dto/patientWithAlertByDateRange.dto';
import { MongoCollectionsName } from '../static/const';
import { AlertCriteriaService } from '../alert-criteria/alert-criteria.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { Alert, AlertDocument } from './model/alert.schema';

@Injectable()
export class AlertService {
  constructor(
    @InjectModel(Alert.name) private alertModel: Model<AlertDocument>,
    private readonly alertCriteriaService: AlertCriteriaService,
  ){}
  
  async create(createAlertDto: CreateAlertDto) {//실제 사용은 xxxx
    let newAlert = new this.alertModel();
    let currentDate = new Date();
    //find ac
    const acInfo = await this.alertCriteriaService.findOne(createAlertDto.acId);
    if(!acInfo){
      throw new NotFoundException('AC_NOT_FOUND', 'AC_NOT_FOUND');
    }
    newAlert.acInfos = [acInfo];
    newAlert.patientId = createAlertDto.patientId;
    newAlert.createdAt = currentDate;
    newAlert.updatedAt = currentDate;
    return await newAlert.save();
  }

  async createWithAlertCriteria(patientId: string, acInfos: AlertCriteria[]){
    let newAlert = new this.alertModel();
    let currentDate = new Date();
    newAlert.acInfos = acInfos;
    newAlert.patientId = patientId;
    newAlert.createdAt = currentDate;
    newAlert.updatedAt = currentDate;
    return await newAlert.save();
  }

  async findAll() {
    return await this.alertModel.find();
  }

  async findOne(id: string) {
    return await this.alertModel.findById(id);
  }

  async aggregatePipelines(pipeline: any[]): Promise<any[]> {
    const aggregate = this.alertModel.aggregate(pipeline);
    return await aggregate;
  }


  async update(id: string, updateAlertDto: UpdateAlertDto) {//실제 사용은 xxxx?
    let alert = await this.alertModel.findById(id);
    if(!alert){
      throw new NotFoundException('ALERT_NOT_FOUND', 'ALERT_NOT_FOUND');
    }

    // if(updateAlertDto.acId){
    //   //find ac
    //   const acInfo = await this.alertCriteriaService.findOne(updateAlertDto.acId);
    //   if(!acInfo){
    //     throw new NotFoundException('AC_NOT_FOUND', 'AC_NOT_FOUND');
    //   }
    //   newAlert.acInfos = [acInfo];
    // }
    if(updateAlertDto.patientId)
    alert.patientId = updateAlertDto.patientId;
    alert.updatedAt = new Date();

    return await alert.save();
  }

  async remove(id: string) {
    return await this.alertModel.deleteOne({_id: id});
  }

  async findPWABDR(dto: PatientWithAlertByDateRangeDTO){
    const aggregate = [
      { 
        $match: {
          createdAt: {$gte: dto.fromDate, $lt: dto.toDate}
        }
      },
      {
        $group: {
          _id: "$patientId",
          alertInfo: { $push: {
            _id: '$_id',
            acInfos: '$acInfos',
            createdAt: '$createdAt',
            updatedAt: '$updatedAt',
          }}
        }
      },
      {
        $lookup: {
          from: MongoCollectionsName.patients,
          localField: "_id",
          foreignField: "_id",
          as: "patient"
        }
      },
      {
        $project: {
          _id: 1,
          name: { "$first" : "$patient.name"},
          createdAt: { "$first" : "$patient.createdAt"},
          updatedAt: { "$first" : "$patient.updatedAt"},
          alertInfo: 1
        }
      }
    ]
    // console.log(aggregate)
    // let a = await this.aggregatePipelines(aggregate);
    // console.log(a)
    return await this.aggregatePipelines(aggregate);
  }
}
