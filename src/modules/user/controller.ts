import { Request } from "express";
import { UserService } from "./service";


export const GetController = async (req: Request) => {
  try {
    const response = await new UserService().getUsers()
    
    return response
  } catch (error) {
    throw error
  }
}