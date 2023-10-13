import { Role } from "src/auth/enum/rol.enum";


export interface User extends Document {
    id: string;
    name?: string;
    email: string;
    password: string;
    role: Role;
  }
