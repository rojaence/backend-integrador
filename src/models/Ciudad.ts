import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Empresa, EmpresaId } from './Empresa';
import type { Pais, PaisId } from './Pais';

export interface CiudadAttributes {
  ciudadId: number;
  ciudadNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  paisId?: number;
}

export type CiudadPk = "ciudadId";
export type CiudadId = Ciudad[CiudadPk];
export type CiudadOptionalAttributes = "ciudadId" | "ciudadNombre" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "paisId";
export type CiudadCreationAttributes = Optional<CiudadAttributes, CiudadOptionalAttributes>;

export class Ciudad extends Model<CiudadAttributes, CiudadCreationAttributes> implements CiudadAttributes {
  ciudadId!: number;
  ciudadNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  paisId?: number;

  // Ciudad hasMany Empresa via ciudadId
  empresas!: Empresa[];
  getEmpresas!: Sequelize.HasManyGetAssociationsMixin<Empresa>;
  setEmpresas!: Sequelize.HasManySetAssociationsMixin<Empresa, EmpresaId>;
  addEmpresa!: Sequelize.HasManyAddAssociationMixin<Empresa, EmpresaId>;
  addEmpresas!: Sequelize.HasManyAddAssociationsMixin<Empresa, EmpresaId>;
  createEmpresa!: Sequelize.HasManyCreateAssociationMixin<Empresa>;
  removeEmpresa!: Sequelize.HasManyRemoveAssociationMixin<Empresa, EmpresaId>;
  removeEmpresas!: Sequelize.HasManyRemoveAssociationsMixin<Empresa, EmpresaId>;
  hasEmpresa!: Sequelize.HasManyHasAssociationMixin<Empresa, EmpresaId>;
  hasEmpresas!: Sequelize.HasManyHasAssociationsMixin<Empresa, EmpresaId>;
  countEmpresas!: Sequelize.HasManyCountAssociationsMixin;
  // Ciudad belongsTo Pais via paisId
  pai!: Pais;
  getPai!: Sequelize.BelongsToGetAssociationMixin<Pais>;
  setPai!: Sequelize.BelongsToSetAssociationMixin<Pais, PaisId>;
  createPai!: Sequelize.BelongsToCreateAssociationMixin<Pais>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Ciudad {
    return sequelize.define('Ciudad', {
    ciudadId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ciudad_id'
    },
    ciudadNombre: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'ciudad_nombre'
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
    },
    paisId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'pais_id'
      },
      field: 'pais_id'
    }
  }, {
    tableName: 'ciudad',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "ciudad_pkey",
        unique: true,
        fields: [
          { name: "ciudad_id" },
        ]
      },
    ]
  }) as typeof Ciudad;
  }
}
