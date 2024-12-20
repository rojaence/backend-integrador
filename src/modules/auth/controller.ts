import {  Request } from 'express'
import { IUser } from '../../interfaces/Auth.interface'
import { AuthService } from './service'

export const RegisterController = async (req: Request) => {
  try {
    const { username, password }= req.body as IUser
    const response = await new AuthService().registerService(username, password)
    return response
  } catch (error) {
    throw error
  }
}