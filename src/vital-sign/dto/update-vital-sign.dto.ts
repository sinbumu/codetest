import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateVitalSignDto } from './create-vital-sign.dto';

export class UpdateVitalSignDto extends PartialType(CreateVitalSignDto) {    
    @IsNotEmpty()
    @IsString()
    patientId: string;

    @IsNotEmpty()
    @IsNumber()
    type: number
  
    @IsNotEmpty()
    @IsNumber()
    value: number
}

