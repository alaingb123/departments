import { ObjectId } from "mongoose";
import { Deparment } from "src/deparments/interfaces/deparment.interface";




export interface Category extends Document {
    id: ObjectId;
    name: string;
    last_name: string;
    deparment_id: Deparment;
  }