import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DeparmentsService } from 'src/deparments/deparments.service';
import { Category } from './interfaces/categorie.interface';

@Injectable()
export class CategoriesService {
  
  constructor(
    private readonly deparmentService : DeparmentsService,
    @InjectModel('category')
    private readonly categoryModel: Model <Category>,)  
  {}
  
  async create(createCategoryDto: CreateCategoryDto) {
   const  deparment = await this.deparmentService.findOne(createCategoryDto.deparment_id.id)
   if (!deparment){
    throw new BadRequestException('Deparment not exist')
   }
    const  category = await new this.categoryModel(createCategoryDto);
    await category.save();
    return category;
  }

  async findAll() {
    return await this.categoryModel.find()
  }

 async findOne(id: ObjectId) {
    const category = await this.categoryModel.findById(id);
   // console.log(category.deparment_id)
    if(!category){
      throw new BadRequestException ('Deparment not exist');
    }
    return category;
  }

 async update(id: ObjectId, updateCategoryDto: UpdateCategoryDto) {
    const updateCate = await this.categoryModel.findByIdAndUpdate(id,updateCategoryDto,{new:true})
    return updateCate;
  }

 async remove(id: ObjectId) {
    return await this.categoryModel.findByIdAndDelete(id);
}


}