import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AlertCriteriaService } from './alert-criteria.service';
import { CreateAlertCriterionDto } from './dto/create-alert-criterion.dto';
import { UpdateAlertCriterionDto } from './dto/update-alert-criterion.dto';

@Controller('alert-criteria')
export class AlertCriteriaController {
  constructor(private readonly alertCriteriaService: AlertCriteriaService) {}

  @Post()
  @ApiOperation({tags:['alert-criteria'], summary: "alert-criteria 생성" })
  create(@Body() createAlertCriterionDto: CreateAlertCriterionDto) {
    return this.alertCriteriaService.create(createAlertCriterionDto);
  }

  @Get()
  @ApiOperation({tags:['alert-criteria'], summary: "alert-criteria 전체 조회" })
  findAll() {
    return this.alertCriteriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({tags:['alert-criteria'], summary: "alert-criteria ID기반 조회" })
  findOne(@Param('id') id: string) {
    return this.alertCriteriaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({tags:['alert-criteria'], summary: "alert-criteria 업데이트" })
  update(@Param('id') id: string, @Body() updateAlertCriterionDto: UpdateAlertCriterionDto) {
    return this.alertCriteriaService.update(id, updateAlertCriterionDto);
  }

  @Delete(':id')
  @ApiOperation({tags:['alert-criteria'], summary: "alert-criteria 삭제" })
  remove(@Param('id') id: string) {
    return this.alertCriteriaService.remove(id);
  }
}
