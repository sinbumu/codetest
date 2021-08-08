import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAlertDto } from './create-alert.dto';

export class UpdateAlertDto extends PartialType(CreateAlertDto) {
    @IsOptional()
    @IsString()
    @ApiProperty({ name: "patientId", required: false, description: "환자 식별값" })
    patientId?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ name: "acId", required: false, description: "AlertCriteria(경고 발생기준) ID (vital시 생성 전재라 실제론 사용x)" })
    acId?: string;//AlertCriteria Id
}
