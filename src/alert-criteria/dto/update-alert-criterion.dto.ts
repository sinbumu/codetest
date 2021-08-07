import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateAlertCriterionDto } from './create-alert-criterion.dto';

export class UpdateAlertCriterionDto extends PartialType(CreateAlertCriterionDto) {
    @IsNotEmpty()
    @IsNumber()
    vitalType: number
  
    @IsNotEmpty()
    @IsNumber()
    ro: number
}
