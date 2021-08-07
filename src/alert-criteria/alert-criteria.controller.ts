import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertCriteriaService } from './alert-criteria.service';
import { CreateAlertCriterionDto } from './dto/create-alert-criterion.dto';
import { UpdateAlertCriterionDto } from './dto/update-alert-criterion.dto';

@Controller('alert-criteria')
export class AlertCriteriaController {
  constructor(private readonly alertCriteriaService: AlertCriteriaService) {}

  @Post()
  create(@Body() createAlertCriterionDto: CreateAlertCriterionDto) {
    return this.alertCriteriaService.create(createAlertCriterionDto);
  }

  @Get()
  findAll() {
    return this.alertCriteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertCriteriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlertCriterionDto: UpdateAlertCriterionDto) {
    return this.alertCriteriaService.update(+id, updateAlertCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertCriteriaService.remove(+id);
  }
}
