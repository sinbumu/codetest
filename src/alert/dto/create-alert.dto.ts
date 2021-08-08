import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAlertDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: "patientId", required: true, description: "환자 식별값" })
    patientId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: "acId", required: true, description: "AlertCriteria(경고 발생기준) ID (vital시 생성 전재라 실제론 사용x)" })
    acId: string;//AlertCriteria Id
}