import {  Request } from 'express'
import { IUser } from '../../interfaces/Auth.interface'
import { AuthService } from './service'

export const RegisterController = async (req: Request) => {
  try {
    const { username, password }= req.body as IUser
    const user = await new AuthService().registerService(username, password)
    return { 'message': 'Usuario', 'usuario': user }
  } catch (error) {
    throw error
  }
}