import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Industria, IndustriaId } from './Industria';
import type { MovimientoDetPagos, MovimientoDetPagosId } from './MovimientoDetPagos';

export interface TarjetaCreditoAttributes {
  tarjetaId: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type TarjetaCreditoPk = "tarjetaId";
export type TarjetaCreditoId = TarjetaCredito[TarjetaCreditoPk];
export type TarjetaCreditoOptionalAttributes = "tarjetaId" | "tarjetaDescripcion" | "industriaId" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type TarjetaCreditoCreationAttributes = Optional<TarjetaCreditoAttributes, TarjetaCreditoOptionalAttributes>;

export class TarjetaCredito extends Model<TarjetaCreditoAttributes, TarjetaCreditoCreationAttributes> implements TarjetaCreditoAttributes {
  tarjetaId!: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // TarjetaCredito belongsTo Industria via industriaId
  industrium!: Industria;
  getIndustrium!: Sequelize.BelongsToGetAssociationMixin<Industria>;
  setIndustrium!: Sequelize.BelongsToSetAssociationMixin<Industria, IndustriaId>;
  createIndustrium!: Sequelize.BelongsToCreateAssociationMixin<Industria>;
  // TarjetaCredito hasMany MovimientoDetPagos via tarjetacredId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TarjetaCredito {
    return sequelize.define('TarjetaCredito', {
    tarjetaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tarjeta_id'
    },
    tarjetaDescripcion: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'tarjeta_descripcion'
    },
    industriaId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'industria',
        key: 'industria_id'
      },
      field: 'industria_id'
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
    tableName: 'tarjeta_credito',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "tarjeta_credito_pkey",
        unique: true,
        fields: [
          { name: "tarjeta_id" },
        ]
      },
    ]
  }) as typeof TarjetaCredito;
  }
}
