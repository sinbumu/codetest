import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  // @Post()
  // @ApiOperation({tags:['alert'], summary: "alert 생성. 실제론 이 api가 아니라 vital 생성시 만듬" })
  // create(@Body() createAlertDto: CreateAlertDto) {//실제 여기서 만들진 X
  //   return this.alertService.create(createAlertDto);
  // }

  @Get()
  @ApiOperation({tags:['alert'], summary: "alert 전체 조회" })
  findAll() {
    return this.alertService.findAll();
  }

  @Get(':id')
  @ApiOperation({tags:['alert'], summary: "alert ID기반 조회" })
  findOne(@Param('id') id: string) {
    return this.alertService.findOne(id);
  }

  // @Patch(':id')
  // @ApiOperation({tags:['alert'], summary: "alert 생성. 조건 만족시 alert도 생성됨." })
  // update(@Param('id') id: string, @Body() updateAlertDto: UpdateAlertDto) {
  //   return this.alertService.update(id, updateAlertDto);
  // }

  @Delete(':id')
  @ApiOperation({tags:['alert'], summary: "alert 삭제" })
  remove(@Param('id') id: string) {
    return this.alertService.remove(id);
  }
}
