import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlertCriterionDto } from './dto/create-alert-criterion.dto';
import { UpdateAlertCriterionDto } from './dto/update-alert-criterion.dto';
import { AlertCriteria, AlertCriteriaDocument } from './model/alert-criteria.schema';

@Injectable()
export class AlertCriteriaService {
  constructor(
    @InjectModel(AlertCriteria.name) private alertCriteriaModel: Model<AlertCriteriaDocument>,
  ){}
  
  async create(createAlertCriterionDto: CreateAlertCriterionDto) {
    let newAlertCriteria = new this.alertCriteriaModel();
    let currentDate = new Date();
    newAlertCriteria.vitalType = createAlertCriterionDto.vitalType;
    newAlertCriteria.ro = createAlertCriterionDto.ro;
    newAlertCriteria.createdAt = currentDate;
    newAlertCriteria.updatedAt = currentDate;
    return await newAlertCriteria.save();
  }

  async findAll() {
    return await this.alertCriteriaModel.find();
  }

  async findOne(id: string) {
    return await this.alertCriteriaModel.findById(id);
  }

  async findByVitalType(vitalType: number): Promise<AlertCriteriaDocument[]>{
    return await this.alertCriteriaModel.find({vitalType});
  }

  async update(id: string, updateAlertCriterionDto: UpdateAlertCriterionDto) {
    let alertCriteria = await this.alertCriteriaModel.findById(id);
    if(!alertCriteria){
      throw new NotFoundException('ALERTCRITERIA_NOT_FOUND', 'ALERTCRITERIA_NOT_FOUND');
    }

    if(updateAlertCriterionDto.vitalType)
    alertCriteria.vitalType = updateAlertCriterionDto.vitalType;
    if(updateAlertCriterionDto.ro)
    alertCriteria.ro = updateAlertCriterionDto.ro;
    alertCriteria.updatedAt = new Date();

    return await alertCriteria.save();
  }

  async remove(id: string) {
    return await this.alertCriteriaModel.deleteOne({_id: id});
  }

  async checkNeedAlert(type: number, value: number): Promise<AlertCriteriaDocument[]>{
    let returnArr = [];
    const acArr = await this.findByVitalType(type);//type값으로 기준들 가져옴.
    for(let ac of acArr){
      if(this.isProblem(value, ac))
        returnArr.push(ac);
    }
    return returnArr;
  }

  isProblem(value: number, ac: AlertCriteriaDocument): boolean{
    switch(ac.ro){
      case 0:
        return value < ac.point
      case 1:
        return value <= ac.point
      case 2:
        return value > ac.point
      case 3:
        return value >= ac.point
    }
  }
}
