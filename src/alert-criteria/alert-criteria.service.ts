import { Injectable } from '@nestjs/common';
import { CreateAlertCriterionDto } from './dto/create-alert-criterion.dto';
import { UpdateAlertCriterionDto } from './dto/update-alert-criterion.dto';

@Injectable()
export class AlertCriteriaService {
  create(createAlertCriterionDto: CreateAlertCriterionDto) {
    return 'This action adds a new alertCriterion';
  }

  findAll() {
    return `This action returns all alertCriteria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alertCriterion`;
  }

  update(id: number, updateAlertCriterionDto: UpdateAlertCriterionDto) {
    return `This action updates a #${id} alertCriterion`;
  }

  remove(id: number) {
    return `This action removes a #${id} alertCriterion`;
  }
}
