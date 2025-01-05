import { IUser } from "./Auth.interface";


export interface ICreateUserDTO {
  username: string,
  password: string
}

export interface IUserByIdRequest {
  id: number
}

export type TUserProfile = Omit<IUser, "password">