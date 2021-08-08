import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlertService } from '../alert/alert.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientWithAlertByDateRangeDTO } from './dto/patientWithAlertByDateRange.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './model/patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
    private readonly alertService: AlertService,
  ){}

  async create(createPatientDto: CreatePatientDto) {
    let newPatient = new this.patientModel();
    let currentDate = new Date();
    newPatient.name = createPatientDto.name;
    newPatient.createdAt = currentDate;
    newPatient.updatedAt = currentDate;
    return await newPatient.save();
  }

  async findAll() {
    return await this.patientModel.find();
  }

  async findOne(id: string) {
    return await this.patientModel.findById(id);
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    let patient = await this.patientModel.findById(id);
    if(!patient){
      throw new NotFoundException('PATIENT_NOT_FOUND', 'PATIENT_NOT_FOUND');
    }

    if(updatePatientDto.name)
    patient.name = updatePatientDto.name;
    patient.updatedAt = new Date();

    return await patient.save();
  }

  async remove(id: string) {
    return await this.patientModel.deleteOne({_id: id});
  }

  async findPatientWithAlertByDateRange(dto: PatientWithAlertByDateRangeDTO){
    return await this.alertService.findPWABDR(dto);
  }
}
