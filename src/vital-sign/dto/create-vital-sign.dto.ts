import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVitalSignDto {    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: "patientId", required: true, description: "환자 id" })
    patientId: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: "type", required: true, description: "타입 - 1 Temp 2 Pulse" })
    type: number
  
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: "value", required: true, description: "해당 타입에 대한 값" })
    value: number
}
