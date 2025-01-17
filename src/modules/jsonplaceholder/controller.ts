import { JsonplaceholderService } from "./service"
import { Request } from "express"

export const GetUsersController = async (req: Request, fetch = false) => {
  try {
    const response = await new JsonplaceholderService().GetUsers(fetch)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}