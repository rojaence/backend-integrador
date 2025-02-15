import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { Category } from './Category';
import { models } from '../database/config/initDatabase';
// import type { Categoria, CategoriaId } from './Categoria';
// import type { Marca, MarcaId } from './Marca';
// import type { MovimientoDetProducto, MovimientoDetProductoId } from './MovimientoDetProducto';

export interface ProductAttributes {
  id: number,
  name: string,
  price: number,
  status: boolean,
  categoryId?: number,
  description?: string
}

export type ProductPk = "id";
export type ProductId = Product[ProductPk];
export type ProductOptionalAttributes = "id" | "categoryId";
export type ProductCreationAttributes = Optional<ProductAttributes, ProductOptionalAttributes>;

export type ProductPutAttributes = Omit<ProductAttributes, "id">

export enum ProductScopes {
  ProductDetails = 'productDetails'
}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  id!: number
  name!: string
  price!: number
  status!: boolean
  categoryId?: number
  description?: string

  // Producto belongsTo Categoria via categoriaId
  category!: Category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<Category>;
  // setCategorium!: Sequelize.BelongsToSetAssociationMixin<Categoria, CategoriaId>;
  // createCategorium!: Sequelize.BelongsToCreateAssociationMixin<Categoria>;
  // Producto belongsTo Marca via marcaId
  // marca!: Marca;
  // getMarca!: Sequelize.BelongsToGetAssociationMixin<Marca>;
  // setMarca!: Sequelize.BelongsToSetAssociationMixin<Marca, MarcaId>;
  // createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marca>;
  // Producto hasMany MovimientoDetProducto via productoId
  // movimientoDetProductos!: MovimientoDetProducto[];
  // getMovimientoDetProductos!: Sequelize.HasManyGetAssociationsMixin<MovimientoDetProducto>;
  // setMovimientoDetProductos!: Sequelize.HasManySetAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // addMovimientoDetProducto!: Sequelize.HasManyAddAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // addMovimientoDetProductos!: Sequelize.HasManyAddAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // createMovimientoDetProducto!: Sequelize.HasManyCreateAssociationMixin<MovimientoDetProducto>;
  // removeMovimientoDetProducto!: Sequelize.HasManyRemoveAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // removeMovimientoDetProductos!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // hasMovimientoDetProducto!: Sequelize.HasManyHasAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // hasMovimientoDetProductos!: Sequelize.HasManyHasAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  // countMovimientoDetProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Product {
    return sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE(10, 2),
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
  }, {
    tableName: 'product',
    schema: 'retail',
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof Product;
  }
}
