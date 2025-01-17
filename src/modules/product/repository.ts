import { Product, ProductAttributes, ProductCreationAttributes, ProductPutAttributes, ProductScopes } from "../../models/Product";
import { models } from "../../database/config/initDatabase";
import { Op } from "sequelize";
import ApiException from "../../exceptions/ApiException";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import { ProductQueryParams } from "../common/intefaces";

export default class ProductRepository {

  async GetAll(query: ProductQueryParams): Promise<Product[]> {
    return models.Product.scope(ProductScopes.ProductDetails).findAll({
      where: {
        ...(query.status !== undefined ? { status: query.status } : {})
      }
    });
  }

  async GetById(id: number): Promise<Product | null> {
    return models.Product.scope(ProductScopes.ProductDetails).findOne({
      where: {
        id
      },
    })
  }

  async CreateProduct(payload: ProductCreationAttributes): Promise<Product> {
    const category = await models.Product.create(payload)
    return category
  }

  async FindByName(name: string): Promise<Product | null> {
    const existing = await models.Product.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}`
        }
      }
    })
    return existing
  }

  async PutProduct(id: number, payload: ProductPutAttributes) {
    const product = await this.GetById(id)
    if (!product) {
      throw new ApiException("No se encontró un producto con el id proporcionado", CodesHttpEnum.notFound)
    }
    product.set(payload)
    await product.save()
    const updatedProduct = await models.Product.scope(ProductScopes.ProductDetails).findByPk(id)
    return updatedProduct
  }

  async DeleteLogicProduct(id: number) {
    const product = await this.GetById(id)
    if (!product) {
      throw new ApiException("No se encontró un producto con el id proporcionado", CodesHttpEnum.notFound)
    }
    product.set({
      status: false
    })
    await product.save()
  }

  async DeletePhysicalProduct(id: number) {
    return models.Product.destroy({
      where: {
        id
      }
    })
  }
}