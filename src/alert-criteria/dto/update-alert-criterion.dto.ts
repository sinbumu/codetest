import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertCriterionDto } from './create-alert-criterion.dto';

export class UpdateAlertCriterionDto extends PartialType(CreateAlertCriterionDto) {}
