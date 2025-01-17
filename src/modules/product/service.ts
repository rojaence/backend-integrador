import { CodesHttpEnum } from "../../enums/codesHttpEnums"
import { CategoryCreationAttributes } from "../../models/Category"
import { ProductCreationAttributes, ProductPutAttributes } from "../../models/Product"
import { HttpResponse } from "../../utils/httpResponse"
import ProductRepository from "./repository"
import CategoryRepository from "../category/repository";

export class ProductService {

  private readonly _productRepository: ProductRepository
  private readonly _categoryRepository: CategoryRepository;
  constructor() {
    this._productRepository = new ProductRepository()
    this._categoryRepository = new CategoryRepository()
  }

  async getProducts() {
    let products = await this._productRepository.GetAll()
    return HttpResponse.response(CodesHttpEnum.ok, products)
  }

  async createProduct(data: ProductCreationAttributes) {
    const existingProduct = await this._productRepository.FindByName(data.name) 
    if (existingProduct) {
      return HttpResponse.response(CodesHttpEnum.badRequest, "Error al crear producto", `Ya existe el producto ${data.name}`)
    }

    const existingCategory = await this._categoryRepository.GetById(data.categoryId!)
    if (!existingCategory) {
      return HttpResponse.response(CodesHttpEnum.badRequest, "Error al crear producto", `No existe la categoría seleccionada`)
    }
    
    const newProduct = await this._productRepository.CreateProduct(data)
    return HttpResponse.response(CodesHttpEnum.created, newProduct, "Producto creado con éxito")
  }

  async getById(id: number) {
    const existingProduct = await this._productRepository.GetById(id)
    if (!existingProduct) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Producto no encontrado')
    }
    return HttpResponse.response(CodesHttpEnum.ok, existingProduct)
  }

  async putProduct(id: number, data: ProductPutAttributes) {
    const existingProduct = await this._productRepository.GetById(id) 
    if (!existingProduct) {
      return HttpResponse.response(CodesHttpEnum.notFound, "Error al actualizar producto", `El producto no existe`)
    }

    if (!existingProduct.status) {
      return HttpResponse.response(CodesHttpEnum.notModified, "Error al actualizar producto", "El producto se encuentra inactivo")
    }

    const existingProductName = await this._productRepository.FindByName(data.name) 
    if (existingProductName && existingProduct.id != id) {
      return HttpResponse.response(CodesHttpEnum.notModified, "Error al actualizar producto", `Ya existe el producto ${data.name}`)
    }
    
    const existingCategory = await this._categoryRepository.GetById(data.categoryId!)
    if (!existingCategory) {
      return HttpResponse.response(CodesHttpEnum.notModified, "Error al actualizar producto", `No existe la categoría seleccionada`)
    }

    const updatedProduct = await this._productRepository.PutProduct(id, data)

    if (!updatedProduct) {
      return HttpResponse.response(CodesHttpEnum.notModified, "Error al actualizar producto", `No fue posible actualizar el producto`)
    }
    return HttpResponse.response(CodesHttpEnum.ok, updatedProduct, 'Producto actualizado con éxito')
  }

  async DeleteLogic(id: number) {
    const existingProduct = await this._productRepository.GetById(id) 
    if (!existingProduct) {
      return HttpResponse.response(CodesHttpEnum.notFound, "Error al actualizar producto", `El producto no existe`)
    }
    await this._productRepository.DeleteLogicProduct(id)
    return HttpResponse.response(CodesHttpEnum.ok, "Eliminación lógica", 'Producto deshabilitado correctamente')
  }

  async DeletePhysical(id: number) {
    const existingProduct = await this._productRepository.GetById(id) 
    if (!existingProduct) {
      return HttpResponse.response(CodesHttpEnum.notFound, "Error al eliminar producto", `El producto no existe`)
    }
    await this._productRepository.DeletePhysicalProduct(id)
    return HttpResponse.response(CodesHttpEnum.ok, "Eliminación física", 'Producto eliminado correctamente')
  }
}