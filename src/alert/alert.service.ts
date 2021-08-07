import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
  
  async create(createAlertDto: CreateAlertDto) {
    let newAlert = new this.alertModel();
    let currentDate = new Date();
    //find ac
    const acInfo = await this.alertCriteriaService.findOne(createAlertDto.acId);
    if(!acInfo){
      throw new NotFoundException('AC_NOT_FOUND', 'AC_NOT_FOUND');
    }
    newAlert.acInfo = acInfo;
    newAlert.patientId = createAlertDto.patientId;
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

  async update(id: string, updateAlertDto: UpdateAlertDto) {
    let alert = await this.alertModel.findById(id);
    if(!alert){
      throw new NotFoundException('ALERT_NOT_FOUND', 'ALERT_NOT_FOUND');
    }

    if(updateAlertDto.acId){
      //find ac
      const acInfo = await this.alertCriteriaService.findOne(updateAlertDto.acId);
      if(!acInfo){
        throw new NotFoundException('AC_NOT_FOUND', 'AC_NOT_FOUND');
      }
      alert.acInfo = acInfo;
    }
    if(updateAlertDto.patientId)
    alert.patientId = updateAlertDto.patientId;
    alert.updatedAt = new Date();

    return await alert.save();
  }

  async remove(id: string) {
    return await this.alertModel.deleteOne({_id: id});
  }
}
