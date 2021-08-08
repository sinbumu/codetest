import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateAlertCriterionDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: "vitalType", required: true, description: "바이탈 타입 - 1 Temp 2 Pulse" })
    vitalType: number
  
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: "ro", required: true, description: "relation operator 관계 연산자... 1 < 2 <= 3 > 4 >= ..." })
    ro: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: "point", required: true, description: "기준점 (관계 연상자 뒤에 들어갈 값.)" })
    point: number
}
