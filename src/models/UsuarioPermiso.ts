import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Opcion, OpcionId } from './Opcion';
import type { Usuario, UsuarioId } from './Usuario';

export interface UsuarioPermisoAttributes {
  permisoId: number;
  moduloId?: number;
  opcionId?: number;
  usuId?: number;
  estadoPermiso?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type UsuarioPermisoPk = "permisoId";
export type UsuarioPermisoId = UsuarioPermiso[UsuarioPermisoPk];
export type UsuarioPermisoOptionalAttributes = "permisoId" | "moduloId" | "opcionId" | "usuId" | "estadoPermiso" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type UsuarioPermisoCreationAttributes = Optional<UsuarioPermisoAttributes, UsuarioPermisoOptionalAttributes>;

export class UsuarioPermiso extends Model<UsuarioPermisoAttributes, UsuarioPermisoCreationAttributes> implements UsuarioPermisoAttributes {
  permisoId!: number;
  moduloId?: number;
  opcionId?: number;
  usuId?: number;
  estadoPermiso?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // UsuarioPermiso belongsTo Opcion via opcionId
  opcion!: Opcion;
  getOpcion!: Sequelize.BelongsToGetAssociationMixin<Opcion>;
  setOpcion!: Sequelize.BelongsToSetAssociationMixin<Opcion, OpcionId>;
  createOpcion!: Sequelize.BelongsToCreateAssociationMixin<Opcion>;
  // UsuarioPermiso belongsTo Usuario via usuId
  usu!: Usuario;
  getUsu!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setUsu!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createUsu!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UsuarioPermiso {
    return sequelize.define('UsuarioPermiso', {
    permisoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'permiso_id'
    },
    moduloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'modulo_id'
    },
    opcionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'opcion',
        key: 'opcion_id'
      },
      field: 'opcion_id'
    },
    usuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      },
      field: 'id'
    },
    estadoPermiso: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'estado_permiso'
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
    tableName: 'usuario_permiso',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "usuario_permiso_pkey",
        unique: true,
        fields: [
          { name: "permiso_id" },
        ]
      },
    ]
  }) as typeof UsuarioPermiso;
  }
}
