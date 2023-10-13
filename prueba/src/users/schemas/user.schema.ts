import { Schema } from "mongoose";
import { Role } from "src/auth/enum/rol.enum";
import { ObjectId } from "typeorm";
import { User } from "../interfaces/user.interface";


  
  export const UserSchema: Schema = new Schema<User>({
    id: Schema.Types.ObjectId,
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.USER, required: true },
  });
  
  export default UserSchema;