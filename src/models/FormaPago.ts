import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoDetPagos, MovimientoDetPagosId } from './MovimientoDetPagos';

export interface FormaPagoAttributes {
  fpagoId: number;
  fpagoDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type FormaPagoPk = "fpagoId";
export type FormaPagoId = FormaPago[FormaPagoPk];
export type FormaPagoOptionalAttributes = "fpagoId" | "fpagoDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type FormaPagoCreationAttributes = Optional<FormaPagoAttributes, FormaPagoOptionalAttributes>;

export class FormaPago extends Model<FormaPagoAttributes, FormaPagoCreationAttributes> implements FormaPagoAttributes {
  fpagoId!: number;
  fpagoDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // FormaPago hasMany MovimientoDetPagos via fpagoId
  movimientoDetPagos!: MovimientoDetPagos[];
  getMovimientoDetPagos!: Sequelize.HasManyGetAssociationsMixin<MovimientoDetPagos>;
  setMovimientoDetPagos!: Sequelize.HasManySetAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  addMovimientoDetPago!: Sequelize.HasManyAddAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  addMovimientoDetPagos!: Sequelize.HasManyAddAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  createMovimientoDetPago!: Sequelize.HasManyCreateAssociationMixin<MovimientoDetPagos>;
  removeMovimientoDetPago!: Sequelize.HasManyRemoveAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  removeMovimientoDetPagos!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  hasMovimientoDetPago!: Sequelize.HasManyHasAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  hasMovimientoDetPagos!: Sequelize.HasManyHasAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  countMovimientoDetPagos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof FormaPago {
    return sequelize.define('FormaPago', {
    fpagoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'fpago_id'
    },
    fpagoDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'fpago_descripcion'
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
    tableName: 'forma_pago',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "forma_pago_pkey",
        unique: true,
        fields: [
          { name: "fpago_id" },
        ]
      },
    ]
  }) as typeof FormaPago;
  }
}
