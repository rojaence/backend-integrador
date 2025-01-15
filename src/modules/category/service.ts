import { CodesHttpEnum } from "../../enums/codesHttpEnums"
import { CategoryCreationAttributes } from "../../models/Category"
import { HttpResponse } from "../../utils/httpResponse"
import CategoryRepository from "./repository"

export class CategoryService {

  private readonly _categoryRepository: CategoryRepository

  constructor() {
    this._categoryRepository = new CategoryRepository()
  }

  async getCategories() {
    let categories = await this._categoryRepository.GetAll()
    return HttpResponse.response(CodesHttpEnum.ok, categories)
  }

  async createCategory(data: CategoryCreationAttributes) {
    const existingCategory = await this._categoryRepository.FindByName(data.name) 
    if (existingCategory) {
      return HttpResponse.response(CodesHttpEnum.badRequest, "Error al crear categoría", `Ya existe la categoría ${data.name}`)
    }
    
    const newCategory = await this._categoryRepository.CreateCategory(data)
    return HttpResponse.response(CodesHttpEnum.created, newCategory, "Categoría creada con éxito")
  }

  async getById(id: number) {
    const existingCategory = await this._categoryRepository.GetById(id)
    if (!existingCategory) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Categoría no encontrada')
    }
    return HttpResponse.response(CodesHttpEnum.ok, existingCategory)
  }
}