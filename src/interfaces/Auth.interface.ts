import { JwtPayload } from "jsonwebtoken"

export interface IUser {
  id: number,
  email: string,
  username: string,
  password: string,
  birthdate: string
}

export interface ICredential {
  username: string,
  password: string
}

export interface ITokenDecoded extends JwtPayload {
  username: string,
  exp: number
}