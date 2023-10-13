import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Deparment } from './interfaces/deparment.interface';



@Injectable()
export class DeparmentsService {


  constructor(
  @InjectModel('deparment')
  private readonly deparmentModel: Model <Deparment>,)
{}

  async create(createDeparmentDto: CreateDeparmentDto) {
    const  deparment = await new this.deparmentModel(createDeparmentDto);
    await deparment.save();
    return deparment;
  }

  async findAll() {
    return await this.deparmentModel.find();
  }

  async findOne(id: ObjectId) {
    const deparment = await this.deparmentModel.findById(id);
    if(!deparment){
      throw new BadRequestException ('Deparment not exist');
    }
    return deparment;
  }

 async update(id: ObjectId, updateDeparmentDto: UpdateDeparmentDto) {
    const updateDpe = await this.deparmentModel.findByIdAndUpdate(id,updateDeparmentDto,{new:true})
    return updateDpe;
  }

 async remove(id: ObjectId) {
    return await this.deparmentModel.findByIdAndDelete(id);
  }
}
