import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Ciudad, CiudadId } from './Ciudad';

export interface PaisAttributes {
  paisId: number;
  paisNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type PaisPk = "paisId";
export type PaisId = Pais[PaisPk];
export type PaisOptionalAttributes = "paisId" | "paisNombre" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type PaisCreationAttributes = Optional<PaisAttributes, PaisOptionalAttributes>;

export class Pais extends Model<PaisAttributes, PaisCreationAttributes> implements PaisAttributes {
  paisId!: number;
  paisNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Pais hasMany Ciudad via paisId
  ciudads!: Ciudad[];
  getCiudads!: Sequelize.HasManyGetAssociationsMixin<Ciudad>;
  setCiudads!: Sequelize.HasManySetAssociationsMixin<Ciudad, CiudadId>;
  addCiudad!: Sequelize.HasManyAddAssociationMixin<Ciudad, CiudadId>;
  addCiudads!: Sequelize.HasManyAddAssociationsMixin<Ciudad, CiudadId>;
  createCiudad!: Sequelize.HasManyCreateAssociationMixin<Ciudad>;
  removeCiudad!: Sequelize.HasManyRemoveAssociationMixin<Ciudad, CiudadId>;
  removeCiudads!: Sequelize.HasManyRemoveAssociationsMixin<Ciudad, CiudadId>;
  hasCiudad!: Sequelize.HasManyHasAssociationMixin<Ciudad, CiudadId>;
  hasCiudads!: Sequelize.HasManyHasAssociationsMixin<Ciudad, CiudadId>;
  countCiudads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Pais {
    return sequelize.define('Pais', {
    paisId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'pais_id'
    },
    paisNombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'pais_nombre'
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
    tableName: 'pais',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "pais_pkey",
        unique: true,
        fields: [
          { name: "pais_id" },
        ]
      },
    ]
  }) as typeof Pais;
  }
}
