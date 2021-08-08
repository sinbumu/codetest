import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @IsOptional()
    @IsString()
    @ApiProperty({ name: "name", required: false, description: "환자 이름 (아무것도 안넣으니 너무 삭막해서 추가)" })
    name?: string;
}
