import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';
import type { Product, ProductId } from './Product';

export interface MovimientoDetProductoAttributes {
  movidetProdId: number;
  movicabId?: number;
  movidetId?: number;
  productoId?: number;
  cantidad?: number;
  precio?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type MovimientoDetProductoPk = "movidetProdId";
export type MovimientoDetProductoId = MovimientoDetProducto[MovimientoDetProductoPk];
export type MovimientoDetProductoOptionalAttributes = "movidetProdId" | "movicabId" | "movidetId" | "productoId" | "cantidad" | "precio" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type MovimientoDetProductoCreationAttributes = Optional<MovimientoDetProductoAttributes, MovimientoDetProductoOptionalAttributes>;

export class MovimientoDetProducto extends Model<MovimientoDetProductoAttributes, MovimientoDetProductoCreationAttributes> implements MovimientoDetProductoAttributes {
  movidetProdId!: number;
  movicabId?: number;
  movidetId?: number;
  productoId?: number;
  cantidad?: number;
  precio?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // MovimientoDetProducto belongsTo MovimientoCab via movicabId
  movicab!: MovimientoCab;
  getMovicab!: Sequelize.BelongsToGetAssociationMixin<MovimientoCab>;
  setMovicab!: Sequelize.BelongsToSetAssociationMixin<MovimientoCab, MovimientoCabId>;
  createMovicab!: Sequelize.BelongsToCreateAssociationMixin<MovimientoCab>;
  // MovimientoDetProducto belongsTo Producto via productoId
  producto!: Product;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MovimientoDetProducto {
    return sequelize.define('MovimientoDetProducto', {
    movidetProdId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movidet_prod_id'
    },
    movicabId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movimiento_cab',
        key: 'movicab_id'
      },
      field: 'movicab_id'
    },
    movidetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'movidet_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'prod_id'
      },
      field: 'producto_id'
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
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
    tableName: 'movimiento_det_producto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_det_producto_pkey",
        unique: true,
        fields: [
          { name: "movidet_prod_id" },
        ]
      },
    ]
  }) as typeof MovimientoDetProducto;
  }
}
