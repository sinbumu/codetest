import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateVitalSignDto } from './create-vital-sign.dto';

export class UpdateVitalSignDto extends PartialType(CreateVitalSignDto) {    
    @IsOptional()
    @IsString()
    @ApiProperty({ name: "patientId", required: false, description: "환자 id" })
    patientId?: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ name: "type", required: false, description: "타입 - 1 Temp 2 Pulse" })
    type?: number
  
    @IsOptional()
    @IsNumber()
    @ApiProperty({ name: "value", required: false, description: "해당 타입에 대한 값" })
    value?: number
}

