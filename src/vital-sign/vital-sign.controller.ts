import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VitalSignService } from './vital-sign.service';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('vital-sign')
export class VitalSignController {
  constructor(private readonly vitalSignService: VitalSignService) {}

  @Post()
  @ApiOperation({tags:['vital-sign'], summary: "vitalSign 생성. 조건 만족시 alert도 생성됨." })
  create(@Body() createVitalSignDto: CreateVitalSignDto) {
    return this.vitalSignService.create(createVitalSignDto);
  }

  @Get()
  @ApiOperation({tags:['vital-sign'], summary: "vitalSign 전체 조회" })
  findAll() {
    return this.vitalSignService.findAll();
  }

  @Get(':id')
  @ApiOperation({tags:['vital-sign'], summary: "vitalSign ID기반 조회" })
  findOne(@Param('id') id: string) {
    return this.vitalSignService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({tags:['vital-sign'], summary: "vitalSign 업데이트" })
  update(@Param('id') id: string, @Body() updateVitalSignDto: UpdateVitalSignDto) {
    return this.vitalSignService.update(id, updateVitalSignDto);
  }

  @Delete(':id')
  @ApiOperation({tags:['vital-sign'], summary: "vitalSign 삭제" })
  remove(@Param('id') id: string) {
    return this.vitalSignService.remove(id);
  }
}
