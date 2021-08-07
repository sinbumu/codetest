import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';
import { VitalSign, VitalSignDocument } from './model/vital-sign';

@Injectable()
export class VitalSignService {
  constructor(
    @InjectModel(VitalSign.name) private vitalSignModel: Model<VitalSignDocument>,
  ){}
  
  async create(createVitalSignDto: CreateVitalSignDto) {
    let newVitalSign = new this.vitalSignModel();
    let currentDate = new Date();
    newVitalSign.patientId = createVitalSignDto.patientId;
    newVitalSign.type = createVitalSignDto.type;
    newVitalSign.value = createVitalSignDto.value;
    newVitalSign.createdAt = currentDate;
    newVitalSign.updatedAt = currentDate;
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
