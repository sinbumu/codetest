import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePatientDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: "name", required: true, description: "환자 이름 (아무것도 안넣으니 너무 삭막해서 추가)" })
    name: string;
}
