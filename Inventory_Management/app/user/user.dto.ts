import { type BaseSchema } from "../commom/dto/base.dto";

export interface IUser extends BaseSchema {
        name: string;
        email: string;
        password: string;
        active?: boolean;
}