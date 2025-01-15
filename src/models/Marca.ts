import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './Product';

export interface MarcaAttributes {
  marcaId: number;
  marcaDescrip?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type MarcaPk = "marcaId";
export type MarcaId = Marca[MarcaPk];
export type MarcaOptionalAttributes = "marcaId" | "marcaDescrip" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type MarcaCreationAttributes = Optional<MarcaAttributes, MarcaOptionalAttributes>;

export class Marca extends Model<MarcaAttributes, MarcaCreationAttributes> implements MarcaAttributes {
  marcaId!: number;
  marcaDescrip?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Marca hasMany Producto via marcaId
  productos!: Product[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<Product>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<Product, ProductId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<Product, ProductId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<Product, ProductId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<Product>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<Product, ProductId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<Product, ProductId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<Product, ProductId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<Product, ProductId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Marca {
    return sequelize.define('Marca', {
    marcaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'marca_id'
    },
    marcaDescrip: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'marca_descrip'
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
    tableName: 'marca',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "marca_pkey",
        unique: true,
        fields: [
          { name: "marca_id" },
        ]
      },
    ]
  }) as typeof Marca;
  }
}
