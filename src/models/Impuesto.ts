import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ImpuestoAttributes {
  impuestoId: number;
  impuestoDescr?: string;
  impuestoValor?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type ImpuestoPk = "impuestoId";
export type ImpuestoId = Impuesto[ImpuestoPk];
export type ImpuestoOptionalAttributes = "impuestoId" | "impuestoDescr" | "impuestoValor" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type ImpuestoCreationAttributes = Optional<ImpuestoAttributes, ImpuestoOptionalAttributes>;

export class Impuesto extends Model<ImpuestoAttributes, ImpuestoCreationAttributes> implements ImpuestoAttributes {
  impuestoId!: number;
  impuestoDescr?: string;
  impuestoValor?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Impuesto {
    return sequelize.define('Impuesto', {
    impuestoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'impuesto_id'
    },
    impuestoDescr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'impuesto_descr'
    },
    impuestoValor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'impuesto_valor'
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
    tableName: 'impuesto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "impuesto_pkey",
        unique: true,
        fields: [
          { name: "impuesto_id" },
        ]
      },
    ]
  }) as typeof Impuesto;
  }
}
