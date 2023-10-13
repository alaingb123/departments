import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(
  
    @InjectModel('User')
    private readonly userModel: Model <User>,
  ){}

  
 async create(createUserDto: CreateUserDto) {
    const  user = await new this.userModel(createUserDto);
    await user.save();
    return user;
  }

  findOneByEmail(email:string){
    return this.userModel.findOne({email})
  }

 
  async findAll() {
    return await this.userModel.find();
  }

 async findOne(id: ObjectId) {
    const user = await this.userModel.findById(id);
    if(!user){
      throw new BadRequestException ('User not exist');
    }
  }

 

  async remove(id: ObjectId) {
    return await this.userModel.findByIdAndDelete(id);
  }

  /*
  async updateUser (id:ObjectId,updateUserDto :UpdateUserDto){
    const updateUser = await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
    return updateUser;
  }


  /* findOneByEmailWithPassword(email:string){
    return this.userRepository.findOne({
      where: {email},
      select:['id', 'name', 'email', 'password', 'role'],
    })
  }*/

   /*

 async updateUser(id: number, updateUserDto: UpdateUserDto) {
    let toUpdate=await this.userRepository.findOneBy({id});
    let update =Object.assign(toUpdate,updateUserDto);
    const user_update = await this.userRepository.save(toUpdate);
    return user_update;
  } */
}
