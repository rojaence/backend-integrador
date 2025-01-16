import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './Product';

export interface CategoryAttributes {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

export type CategoryPk = "id";
export type CategoryId = Category[CategoryPk];
export type CategoryOptionalAttributes = "id";
export type CategoryCreationAttributes = Optional<CategoryAttributes, CategoryOptionalAttributes>;

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  id!: number;
  name!: string;
  description!: string;
  status!: boolean;

  // Categoria hasMany Producto via categoriaId
  products!: Product[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<Product>;
  // setProducts!: Sequelize.HasManySetAssociationsMixin<Product, ProductId>;
  // addProduct!: Sequelize.HasManyAddAssociationMixin<Product, ProductId>;
  // addProducts!: Sequelize.HasManyAddAssociationsMixin<Product, ProductId>;
  // createProduct!: Sequelize.HasManyCreateAssociationMixin<Product>;
  // removeProduct!: Sequelize.HasManyRemoveAssociationMixin<Product, ProductId>;
  // removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<Product, ProductId>;
  // hasProduct!: Sequelize.HasManyHasAssociationMixin<Product, ProductId>;
  // hasProducts!: Sequelize.HasManyHasAssociationsMixin<Product, ProductId>;
  // countProducts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Category {
    return sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
  }, {
    tableName: 'category',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof Category;
  }
}
