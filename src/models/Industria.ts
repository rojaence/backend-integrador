import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TarjetaCredito, TarjetaCreditoId } from './TarjetaCredito';

export interface IndustriaAttributes {
  industriaId: number;
  industriaDescription?: string;
  estado?: number;
  usuIdReg?: number;
  usuIdAct?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
}

export type IndustriaPk = "industriaId";
export type IndustriaId = Industria[IndustriaPk];
export type IndustriaOptionalAttributes = "industriaId" | "industriaDescription" | "estado" | "usuIdReg" | "usuIdAct" | "fechaHoraReg" | "fechaHoraAct";
export type IndustriaCreationAttributes = Optional<IndustriaAttributes, IndustriaOptionalAttributes>;

export class Industria extends Model<IndustriaAttributes, IndustriaCreationAttributes> implements IndustriaAttributes {
  industriaId!: number;
  industriaDescription?: string;
  estado?: number;
  usuIdReg?: number;
  usuIdAct?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;

  // Industria hasMany TarjetaCredito via industriaId
  tarjetaCreditos!: TarjetaCredito[];
  getTarjetaCreditos!: Sequelize.HasManyGetAssociationsMixin<TarjetaCredito>;
  setTarjetaCreditos!: Sequelize.HasManySetAssociationsMixin<TarjetaCredito, TarjetaCreditoId>;
  addTarjetaCredito!: Sequelize.HasManyAddAssociationMixin<TarjetaCredito, TarjetaCreditoId>;
  addTarjetaCreditos!: Sequelize.HasManyAddAssociationsMixin<TarjetaCredito, TarjetaCreditoId>;
  createTarjetaCredito!: Sequelize.HasManyCreateAssociationMixin<TarjetaCredito>;
  removeTarjetaCredito!: Sequelize.HasManyRemoveAssociationMixin<TarjetaCredito, TarjetaCreditoId>;
  removeTarjetaCreditos!: Sequelize.HasManyRemoveAssociationsMixin<TarjetaCredito, TarjetaCreditoId>;
  hasTarjetaCredito!: Sequelize.HasManyHasAssociationMixin<TarjetaCredito, TarjetaCreditoId>;
  hasTarjetaCreditos!: Sequelize.HasManyHasAssociationsMixin<TarjetaCredito, TarjetaCreditoId>;
  countTarjetaCreditos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Industria {
    return sequelize.define('Industria', {
    industriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'industria_id'
    },
    industriaDescription: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'industria_description'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
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
    }
  }, {
    tableName: 'industria',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "industria_pkey",
        unique: true,
        fields: [
          { name: "industria_id" },
        ]
      },
    ]
  }) as typeof Industria;
  }
}
