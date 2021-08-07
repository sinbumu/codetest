import { IsNotEmpty, IsString } from "class-validator";

export class CreateAlertDto {
    @IsNotEmpty()
    @IsString()
    patientId: string;

    @IsNotEmpty()
    @IsString()
    acId: string;//AlertCriteria Id
}