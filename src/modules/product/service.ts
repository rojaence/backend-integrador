import { CodesHttpEnum } from "../../enums/codesHttpEnums"
import { CategoryCreationAttributes } from "../../models/Category"
import { ProductCreationAttributes } from "../../models/Product"
import { HttpResponse } from "../../utils/httpResponse"
import ProductRepository from "./repository"
import CategoryRepository from "../category/repository";

export class ProductService {

  private readonly productRepository: ProductRepository
  private readonly _categoryRepository: CategoryRepository;
  constructor() {
    this.productRepository = new ProductRepository()
    this._categoryRepository = new CategoryRepository()
  }

  async getProducts() {
    let products = await this.productRepository.GetAll()
    return HttpResponse.response(CodesHttpEnum.ok, products)
  }

  async createProduct(data: ProductCreationAttributes) {
    const existingProduct = await this.productRepository.FindByName(data.name) 
    if (existingProduct) {
      return HttpResponse.response(CodesHttpEnum.badRequest, "Error al crear producto", `Ya existe el producto ${data.name}`)
    }

    const existingCategory = await this._categoryRepository.GetById(data.categoryId!)
    if (!existingCategory) {
      return HttpResponse.response(CodesHttpEnum.badRequest, "Error al crear producto", `No existe la categoría seleccionada`)
    }
    
    const newProduct = await this.productRepository.CreateProduct(data)
    return HttpResponse.response(CodesHttpEnum.created, newProduct, "Producto creado con éxito")
  }

  async getById(id: number) {
    const existingProduct = await this.productRepository.GetById(id)
    if (!existingProduct) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Producto no encontrado')
    }
    return HttpResponse.response(CodesHttpEnum.ok, existingProduct)
  }
}