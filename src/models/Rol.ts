import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { UsuarioRol, UsuarioRolId } from './UsuarioRol';

export interface RolAttributes {
  rolId: number;
  rolDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type RolPk = "rolId";
export type RolId = Rol[RolPk];
export type RolOptionalAttributes = "rolId" | "rolDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type RolCreationAttributes = Optional<RolAttributes, RolOptionalAttributes>;

export class Rol extends Model<RolAttributes, RolCreationAttributes> implements RolAttributes {
  rolId!: number;
  rolDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Rol hasMany UsuarioRol via rolId
  usuarioRols!: UsuarioRol[];
  getUsuarioRols!: Sequelize.HasManyGetAssociationsMixin<UsuarioRol>;
  setUsuarioRols!: Sequelize.HasManySetAssociationsMixin<UsuarioRol, UsuarioRolId>;
  addUsuarioRol!: Sequelize.HasManyAddAssociationMixin<UsuarioRol, UsuarioRolId>;
  addUsuarioRols!: Sequelize.HasManyAddAssociationsMixin<UsuarioRol, UsuarioRolId>;
  createUsuarioRol!: Sequelize.HasManyCreateAssociationMixin<UsuarioRol>;
  removeUsuarioRol!: Sequelize.HasManyRemoveAssociationMixin<UsuarioRol, UsuarioRolId>;
  removeUsuarioRols!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioRol, UsuarioRolId>;
  hasUsuarioRol!: Sequelize.HasManyHasAssociationMixin<UsuarioRol, UsuarioRolId>;
  hasUsuarioRols!: Sequelize.HasManyHasAssociationsMixin<UsuarioRol, UsuarioRolId>;
  countUsuarioRols!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Rol {
    return sequelize.define('Rol', {
    rolId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'rol_id'
    },
    rolDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'rol_descripcion'
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
    tableName: 'rol',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "rol_pkey",
        unique: true,
        fields: [
          { name: "rol_id" },
        ]
      },
    ]
  }) as typeof Rol;
  }
}
