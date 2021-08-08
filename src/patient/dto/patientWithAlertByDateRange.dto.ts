import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";
import * as moment from "moment";
import { ApiProperty } from "@nestjs/swagger";

export class PatientWithAlertByDateRangeDTO {
    @IsNotEmpty()
    @Transform(({value}) => new Date(moment(value).format()))
    @IsDate()
    @ApiProperty({ name: "fromDate", required: true, example:"2021-08-07T21:41:37.543Z",description: "시작일(이상)" })
    fromDate: Date;

    @IsNotEmpty()
    @Transform(({value}) => new Date(moment(value).format()))
    @IsDate()
    @ApiProperty({ name: "toDate", required: true, example:"2021-08-07T22:51:59.543Z",description: "종료일(미만)" })
    toDate: Date;
}
