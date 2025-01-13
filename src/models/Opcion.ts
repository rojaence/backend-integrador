import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Modulo, ModuloId } from './Modulo';
import type { UsuarioPermiso, UsuarioPermisoId } from './UsuarioPermiso';

export interface OpcionAttributes {
  opcionId: number;
  opcionDescripcion?: string;
  estado?: number;
  moduloId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type OpcionPk = "opcionId";
export type OpcionId = Opcion[OpcionPk];
export type OpcionOptionalAttributes = "opcionId" | "opcionDescripcion" | "estado" | "moduloId" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type OpcionCreationAttributes = Optional<OpcionAttributes, OpcionOptionalAttributes>;

export class Opcion extends Model<OpcionAttributes, OpcionCreationAttributes> implements OpcionAttributes {
  opcionId!: number;
  opcionDescripcion?: string;
  estado?: number;
  moduloId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Opcion belongsTo Modulo via moduloId
  modulo!: Modulo;
  getModulo!: Sequelize.BelongsToGetAssociationMixin<Modulo>;
  setModulo!: Sequelize.BelongsToSetAssociationMixin<Modulo, ModuloId>;
  createModulo!: Sequelize.BelongsToCreateAssociationMixin<Modulo>;
  // Opcion hasMany UsuarioPermiso via opcionId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Opcion {
    return sequelize.define('Opcion', {
    opcionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'opcion_id'
    },
    opcionDescripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'opcion_descripcion'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    moduloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'modulo_id'
      },
      field: 'modulo_id'
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
    tableName: 'opcion',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "opcion_pkey",
        unique: true,
        fields: [
          { name: "opcion_id" },
        ]
      },
    ]
  }) as typeof Opcion;
  }
}
