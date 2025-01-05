import { IUser } from "./Auth.interface";


export interface ICreateUserDTO {
  username: string,
  password: string
}

export type TPutUserData = Omit<IUser, "id">

export type TUserProfile = Omit<IUser, "password">