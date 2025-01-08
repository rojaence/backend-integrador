import { IUser } from "./Auth.interface";

export type TCreateUserDTO = Omit<IUser, "id">

export type TPutUserData = Omit<IUser, "id">

export type TUserProfile = Omit<IUser, "password">