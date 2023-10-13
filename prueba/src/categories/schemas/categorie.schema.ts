import { Schema } from "mongoose";
import { Category } from "../interfaces/categorie.interface";
import DeparmentSchema from "src/deparments/schemas/deparment.schema";




  
  export const CategorySchema: Schema = new Schema<Category>({
    id: Schema.Types.ObjectId,
    name: { type: String },
    last_name: { type: String },
    deparment_id: { type: DeparmentSchema  },
  });
  
  export default CategorySchema;