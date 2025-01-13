import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Producto, ProductoId } from './Producto';

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
