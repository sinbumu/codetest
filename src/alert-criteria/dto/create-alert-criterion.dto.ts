import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateAlertCriterionDto {
    @IsNotEmpty()
    @IsNumber()
    vitalType: number
  
    @IsNotEmpty()
    @IsNumber()
    ro: number
}
