import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientWithAlertByDateRangeDTO } from './dto/patientWithAlertByDateRange.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('dr')//date range //특정 기간 내 Alert이 발생한 Patient들 조회, 각 Patient는 해당 기간 내 발생한 Alert의 리스트를 가지고 있어야 함
  @ApiOperation({tags:['patient'], summary: "특정 기간 내 Alert이 발생한 Patient들 조회" })
  async findPatientWithAlertByDateRange(@Query() dto: PatientWithAlertByDateRangeDTO){
    if(dto.fromDate > dto.toDate)
      throw new BadRequestException('FROMDATE_EXPECTED_LESS_OR_EQUAL_TODATE','FROMDATE_EXPECTED_LESS_OR_EQUAL_TODATE');
    // console.log(dto)
    return await this.patientService.findPatientWithAlertByDateRange(dto);
  }

  @Post()
  @ApiOperation({tags:['patient'], summary: "patient 생성" })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({tags:['patient'], summary: "patient 전체 조회" })
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOperation({tags:['patient'], summary: "patient ID기반 조회" })
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({tags:['patient'], summary: "patient 업데이트" })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({tags:['patient'], summary: "patient 삭제" })
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
