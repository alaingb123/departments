import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DeparmentsService } from './deparments.service';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';
import { ObjectId } from 'mongoose';

@UseGuards(JwtAuthGuard)
@Controller('deparments')
export class DeparmentsController {
  constructor(private readonly deparmentsService: DeparmentsService) {}

  @Post()
  create(@Body() createDeparmentDto: CreateDeparmentDto) {
    return this.deparmentsService.create(createDeparmentDto);
  }

  @Get()
  findAll() {
    return this.deparmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.deparmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateDeparmentDto: UpdateDeparmentDto) {
    return this.deparmentsService.update(id, updateDeparmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.deparmentsService.remove(id);
  }
}
