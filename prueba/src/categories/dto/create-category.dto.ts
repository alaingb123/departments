import { Type } from "class-transformer";
import { IsMongoId, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ObjectId } from "mongoose";
import { CreateDeparmentDto } from "src/deparments/dto/create-deparment.dto";
import { Deparment } from "src/deparments/interfaces/deparment.interface";

export class CreateCategoryDto {

    @IsNotEmpty({ message: 'El campo "deparment_id" no puede estar vacío' })
    deparment_id: Deparment;
  
    @IsString({ message: 'El campo "name" debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El campo "name" no puede estar vacío' })
    readonly name: string;
  
    @IsString({ message: 'El campo "last_name" debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El campo "last_name" no puede estar vacío' })
    readonly last_name: string;


    
}
