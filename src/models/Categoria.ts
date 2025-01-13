import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Producto, ProductoId } from './Producto';

export interface CategoriaAttributes {
  categoriaId: number;
  categoria?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type CategoriaPk = "categoriaId";
export type CategoriaId = Categoria[CategoriaPk];
export type CategoriaOptionalAttributes = "categoriaId" | "categoria" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type CategoriaCreationAttributes = Optional<CategoriaAttributes, CategoriaOptionalAttributes>;

export class Categoria extends Model<CategoriaAttributes, CategoriaCreationAttributes> implements CategoriaAttributes {
  categoriaId!: number;
  categoria?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Categoria hasMany Producto via categoriaId
  productos!: Producto[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<Producto>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<Producto, ProductoId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<Producto, ProductoId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<Producto, ProductoId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<Producto>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<Producto, ProductoId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<Producto, ProductoId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<Producto, ProductoId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<Producto, ProductoId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Categoria {
    return sequelize.define('Categoria', {
    categoriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'categoria_id'
    },
    categoria: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
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
    }
  }, {
    tableName: 'categoria',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "categoria_pkey",
        unique: true,
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  }) as typeof Categoria;
  }
}
