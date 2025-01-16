import { Category, CategoryCreationAttributes } from "../../models/Category";
import { models } from "../../database/config/initDatabase";
import { Op } from "sequelize";

export default class CategoryRepository {

  async GetAll(): Promise<Category[]> {
    return models.Category.findAll();
  }

  async GetById(id: number): Promise<Category | null> {
    return models.Category.findOne({
      where: {
        id
      }
    })
  }

  async CreateCategory(payload: CategoryCreationAttributes): Promise<Category> {
    const category = await models.Category.create(payload)
    return category
  }

  async FindByName(name: string): Promise<Category | null> {
    const existing = await models.Category.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}`
        }
      }
    })
    return existing
  }
}