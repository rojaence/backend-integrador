import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { UsuarioPermiso, UsuarioPermisoId } from './UsuarioPermiso';
import type { UsuarioRol, UsuarioRolId } from './UsuarioRol';
import BcryptHash from '../utils/bcryptHash';

export interface UsuarioAttributes {
  id: number;
  nombre: string,
  email: string,
  password: string,
  birthdate: string,
  username: string;
  estado?: number;
}

export type UsuarioPk = "id";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "id" | "estado";
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export enum UsuarioScopes {
  DeletePassword = 'deletePassword',
  GetUserProfile = 'getUserProfile'
}

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  id!: number;
  nombre!: string;
  email!: string;
  password!: string;
  birthdate!: string;
  username!: string;
  estado?: number;

  // Usuario hasMany UsuarioPermiso via id
  usuarioPermisos!: UsuarioPermiso[];
  getUsuarioPermisos!: Sequelize.HasManyGetAssociationsMixin<UsuarioPermiso>;
  setUsuarioPermisos!: Sequelize.HasManySetAssociationsMixin<UsuarioPermiso, UsuarioPermisoId>;
  addUsuarioPermiso!: Sequelize.HasManyAddAssociationMixin<UsuarioPermiso, UsuarioPermisoId>;
  addUsuarioPermisos!: Sequelize.HasManyAddAssociationsMixin<UsuarioPermiso, UsuarioPermisoId>;
  createUsuarioPermiso!: Sequelize.HasManyCreateAssociationMixin<UsuarioPermiso>;
  removeUsuarioPermiso!: Sequelize.HasManyRemoveAssociationMixin<UsuarioPermiso, UsuarioPermisoId>;
  removeUsuarioPermisos!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioPermiso, UsuarioPermisoId>;
  hasUsuarioPermiso!: Sequelize.HasManyHasAssociationMixin<UsuarioPermiso, UsuarioPermisoId>;
  hasUsuarioPermisos!: Sequelize.HasManyHasAssociationsMixin<UsuarioPermiso, UsuarioPermisoId>;
  countUsuarioPermisos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuario hasMany UsuarioRol via id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return sequelize.define('Usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nombre'
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'username'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'birthdate'
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'estado'
    },
  }, {
    hooks: {
      beforeCreate: async (record: Usuario, options) => {
        let hashPass = await BcryptHash.genPasswordHash(record.password)
        record.password = hashPass
      }
    },
    scopes: {
       [UsuarioScopes.DeletePassword]: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }    
      },
      [UsuarioScopes.GetUserProfile]: {
        attributes: {
          exclude: ["password"]
        }    
      }
    },
    tableName: 'usuario',
    schema: 'retail',
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof Usuario;
  }
}
