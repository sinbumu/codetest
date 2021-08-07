import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlertCriteriaService } from 'src/alert-criteria/alert-criteria.service';
import { AlertService } from 'src/alert/alert.service';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';
import { VitalSign, VitalSignDocument } from './model/vital-sign';

@Injectable()
export class VitalSignService {
  constructor(
    @InjectModel(VitalSign.name) private vitalSignModel: Model<VitalSignDocument>,
    private readonly alertCriteriaService: AlertCriteriaService,
    private readonly alertService: AlertService,
  ){}
  
  async create(createVitalSignDto: CreateVitalSignDto) {
    let newVitalSign = new this.vitalSignModel();
    let currentDate = new Date();
    newVitalSign.patientId = createVitalSignDto.patientId;
    newVitalSign.type = createVitalSignDto.type;
    newVitalSign.value = createVitalSignDto.value;
    newVitalSign.createdAt = currentDate;
    newVitalSign.updatedAt = currentDate;
    //vitalSign이 alertCriteria조건에 걸리는지 여부 체크 + 걸릴경우 alert생성.
    //alert 생성중 오류가 나더라도 vitalsign은 생성되는게 낫다고 생각하기 때문에 transaction으로 묶진 않음. 
    //뭔가 구현해야 한다면 에러를 웹후크로 보내고
    //내부 로그를 적재하게 하고, 다른 어플리케이션에서 후처리로 쌓을듯? 
    const isNeedAlert = await this.alertCriteriaService.checkNeedAlert(createVitalSignDto.type, createVitalSignDto.value);
    if(isNeedAlert){
      
    }
    //vitalSign이 alertCriteria조건에 걸리는지 여부 체크 + 걸릴경우 alert생성. end
    return await newVitalSign.save();
  }

  async findAll() {
    return await this.vitalSignModel.find();
  }

  async findOne(id: string) {
    return await this.vitalSignModel.findById(id);
  }

  async update(id: string, updateVitalSignDto: UpdateVitalSignDto) {
    let vitalSign = await this.vitalSignModel.findById(id);
    if(!vitalSign){
      throw new NotFoundException('VITALSIGN_NOT_FOUND', 'VITALSIGN_NOT_FOUND');
    }

    if(updateVitalSignDto.patientId)
    vitalSign.patientId = updateVitalSignDto.patientId;
    if(updateVitalSignDto.type)
    vitalSign.type = updateVitalSignDto.type;
    if(updateVitalSignDto.value)
    vitalSign.value = updateVitalSignDto.value;
    vitalSign.updatedAt = new Date();

    return await vitalSign.save();
  }

  async remove(id: string) {
    return await this.vitalSignModel.deleteOne({_id: id});
  }
}
