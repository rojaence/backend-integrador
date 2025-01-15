import { Request } from "express";
import { ProductService } from "./service";
import { ProductCreationAttributes }  from "../../models/init-models"


export const GetController = async (req: Request) => {
  try {
    const response = await new ProductService().getProducts()
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const CreateController = async (req: Request) => {
  try {
    const createProductDTO = req.body as ProductCreationAttributes
    const response = await new ProductService().createProduct(createProductDTO)
    return response
  } catch (error) {
    throw error
  }
}

export const GetByIdController = async (req: Request) => {
  try {
    const categoryId = parseInt(req.params.id)
    const response = await new ProductService().getById(categoryId)
    return response
  } catch (error) {
    throw error
  }
}