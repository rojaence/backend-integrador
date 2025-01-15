import { Request } from "express";
import { CategoryService } from "./service";
import { CategoryCreationAttributes }  from "../../models/init-models"


export const GetController = async (req: Request) => {
  try {
    const response = await new CategoryService().getCategories()
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const CreateController = async (req: Request) => {
  try {
    const createCategoryDTO = req.body as CategoryCreationAttributes
    const response = await new CategoryService().createCategory(createCategoryDTO)
    return response
  } catch (error) {
    throw error
  }
}

export const GetByIdController = async (req: Request) => {
  try {
    const categoryId = parseInt(req.params.id)
    const response = await new CategoryService().getById(categoryId)
    return response
  } catch (error) {
    throw error
  }
}