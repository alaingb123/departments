import { Schema } from "mongoose";
import { Deparment } from "../interfaces/deparment.interface";


  
  export const DeparmentSchema: Schema = new Schema<Deparment>({
    id: Schema.Types.ObjectId,
    name: { type: String },
  });
  
  export default DeparmentSchema;