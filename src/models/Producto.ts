import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Categoria, CategoriaId } from './Categoria';
import type { Marca, MarcaId } from './Marca';
import type { MovimientoDetProducto, MovimientoDetProductoId } from './MovimientoDetProducto';

export interface ProductoAttributes {
  prodId: number;
  prodDescripcion?: string;
  prodUltPrecio?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  estado?: number;
  categoriaId?: number;
  empresaId?: number;
  proveedorId?: number;
  marcaId?: number;
}

export type ProductoPk = "prodId";
export type ProductoId = Producto[ProductoPk];
export type ProductoOptionalAttributes = "prodId" | "prodDescripcion" | "prodUltPrecio" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "estado" | "categoriaId" | "empresaId" | "proveedorId" | "marcaId";
export type ProductoCreationAttributes = Optional<ProductoAttributes, ProductoOptionalAttributes>;

export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  prodId!: number;
  prodDescripcion?: string;
  prodUltPrecio?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  estado?: number;
  categoriaId?: number;
  empresaId?: number;
  proveedorId?: number;
  marcaId?: number;

  // Producto belongsTo Categoria via categoriaId
  categorium!: Categoria;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<Categoria>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<Categoria, CategoriaId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<Categoria>;
  // Producto belongsTo Marca via marcaId
  marca!: Marca;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marca>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marca, MarcaId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marca>;
  // Producto hasMany MovimientoDetProducto via productoId
  movimientoDetProductos!: MovimientoDetProducto[];
  getMovimientoDetProductos!: Sequelize.HasManyGetAssociationsMixin<MovimientoDetProducto>;
  setMovimientoDetProductos!: Sequelize.HasManySetAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  addMovimientoDetProducto!: Sequelize.HasManyAddAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  addMovimientoDetProductos!: Sequelize.HasManyAddAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  createMovimientoDetProducto!: Sequelize.HasManyCreateAssociationMixin<MovimientoDetProducto>;
  removeMovimientoDetProducto!: Sequelize.HasManyRemoveAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  removeMovimientoDetProductos!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  hasMovimientoDetProducto!: Sequelize.HasManyHasAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  hasMovimientoDetProductos!: Sequelize.HasManyHasAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  countMovimientoDetProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Producto {
    return sequelize.define('Producto', {
    prodId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'prod_id'
    },
    prodDescripcion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prod_descripcion'
    },
    prodUltPrecio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'prod_ult_precio'
    },
    fechaHoraReg: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
      field: 'fecha_hora_act'
    },
    usuIdReg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_reg'
    },
    usuIdAct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_act'
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'categoria_id'
      },
      field: 'categoria_id'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'empresa_id'
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'proveedor_id'
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marca',
        key: 'marca_id'
      },
      field: 'marca_id'
    }
  }, {
    tableName: 'producto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "producto_pkey",
        unique: true,
        fields: [
          { name: "prod_id" },
        ]
      },
    ]
  }) as typeof Producto;
  }
}
