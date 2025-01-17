import { Request } from "express";
import { ProductService } from "./service";
import { ProductCreationAttributes }  from "../../models/init-models"
import { Product, ProductPutAttributes } from "../../models/Product";
import { DeleteModelType } from "../../constants";


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

export const PutController = async (req: Request) => {
  try {
    const productId = parseInt(req.params.id)   
    const productData = req.body as ProductPutAttributes
    const response = await new ProductService().putProduct(productId, productData)
    return response
  } catch (error) {
    throw error
  }
}

export const DestroyController = async (req: Request, deleteType: DeleteModelType) => {
  try {
    const productId = parseInt(req.params.id)   
    let response
    switch (deleteType) {
      case DeleteModelType.Physical:
        response = await new ProductService().DeletePhysical(productId)                
        break;

      case DeleteModelType.Physical:
        response = await new ProductService().DeleteLogic(productId)                
        break;

      default:
        response = await new ProductService().DeleteLogic(productId)                
        break;
    }
    return response
  } catch (error) {
    throw error
  }
}