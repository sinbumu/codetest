import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAlertDto } from './create-alert.dto';

export class UpdateAlertDto extends PartialType(CreateAlertDto) {
    @IsNotEmpty()
    @IsString()
    patientId: string;

    @IsNotEmpty()
    @IsString()
    acId: string;//AlertCriteria Id
}
