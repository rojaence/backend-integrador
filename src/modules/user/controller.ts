import { Request } from "express";
import { UserService } from "./service";
import { ICreateUserDTO, TPutUserData } from "../../interfaces/User.interface";


export const GetController = async (req: Request) => {
  try {
    const response = await new UserService().getUsers()
    return response
  } catch (error) {
    throw error
  }
}

export const CreateController = async (req: Request) => {
  try {
    const CreateUserDTO = req.body as ICreateUserDTO
    const response = await new UserService().createUser(CreateUserDTO)
    return response
  } catch (error) {
    throw error
  }
}

export const GetByIdController = async (req: Request) => {
  try {
    const userId = parseInt(req.params.id)
    const response = await new UserService().getById(userId)
    return response
  } catch (error) {
    throw error
  }
}

export const DeleteController = async (req: Request) => {
  try {
    const userId = parseInt(req.params.id)
    const response = await new UserService().deleteUser(userId)
    return response
  } catch (error) {
    throw error
  }
}

export const PutController = async (req: Request) => {
  try {
    const userId = parseInt(req.params.id)
    const newUserData = req.body as TPutUserData
    const response = await new UserService().putUser(userId, newUserData)
    return response
  } catch (error) {
    throw error
  }
}