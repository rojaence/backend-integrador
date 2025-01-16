import { Product, ProductCreationAttributes, ProductScopes } from "../../models/Product";
import { models } from "../../database/config/initDatabase";
import { Op } from "sequelize";

export default class ProductRepository {

  async GetAll(): Promise<Product[]> {
    return models.Product.scope(ProductScopes.ProductDetails).findAll();
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
}