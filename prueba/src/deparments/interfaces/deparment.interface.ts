import { ObjectId } from "mongoose";




export interface Deparment extends Document {
    id: ObjectId;
    name: string;
  }