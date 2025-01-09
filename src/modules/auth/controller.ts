import {  Request } from 'express'
import { ICredential } from '../../interfaces/Auth.interface'
import { AuthService } from './service'
import { UserCreateModel } from '../../models/User'

export const RegisterController = async (req: Request) => {
  try {
    const userData = req.body as UserCreateModel
    const response = await new AuthService().registerService(userData)
    return response
  } catch (error) {
    throw error
  }
}

export const LoginController = async (req: Request) => {
  try {
    const { username, password } = req.body as ICredential
    const response = await new AuthService().loginService(username, password)
    return response
  } catch (error) {
    throw error
  }
}