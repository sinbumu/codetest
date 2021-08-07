import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './model/patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
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

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
