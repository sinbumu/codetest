import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVitalSignDto {    
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
