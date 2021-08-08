import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateAlertCriterionDto } from './create-alert-criterion.dto';

export class UpdateAlertCriterionDto extends PartialType(CreateAlertCriterionDto) {
    @IsOptional()
    @IsNumber()
    @ApiProperty({ name: "vitalType", required: false, description: "바이탈 타입 - 1 Temp 2 Pulse" })
    vitalType?: number
  
    @IsOptional()
    @IsNumber()
    @ApiProperty({ name: "ro", required: false, description: "relation operator 관계 연산자... 1 < 2 <= 3 > 4 >= ..." })
    ro?: number

    @IsOptional()
    @IsNumber()
    @ApiProperty({ name: "point", required: false, description: "기준점 (관계 연상자 뒤에 들어갈 값.)" })
    point?: number
}
