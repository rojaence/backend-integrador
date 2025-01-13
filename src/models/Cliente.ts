import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';

export interface ClienteAttributes {
  clienteId: number;
  clienteRuc?: string;
  clienteNombre1?: string;
  clienteNombre2?: string;
  clienteApellido1?: string;
  clienteApellido2?: string;
  clienteEmail?: string;
  clienteTelefono?: string;
  clienteDireccion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type ClientePk = "clienteId";
export type ClienteId = Cliente[ClientePk];
export type ClienteOptionalAttributes = "clienteId" | "clienteRuc" | "clienteNombre1" | "clienteNombre2" | "clienteApellido1" | "clienteApellido2" | "clienteEmail" | "clienteTelefono" | "clienteDireccion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type ClienteCreationAttributes = Optional<ClienteAttributes, ClienteOptionalAttributes>;

export class Cliente extends Model<ClienteAttributes, ClienteCreationAttributes> implements ClienteAttributes {
  clienteId!: number;
  clienteRuc?: string;
  clienteNombre1?: string;
  clienteNombre2?: string;
  clienteApellido1?: string;
  clienteApellido2?: string;
  clienteEmail?: string;
  clienteTelefono?: string;
  clienteDireccion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Cliente hasMany MovimientoCab via clienteId
  movimientoCabs!: MovimientoCab[];
  getMovimientoCabs!: Sequelize.HasManyGetAssociationsMixin<MovimientoCab>;
  setMovimientoCabs!: Sequelize.HasManySetAssociationsMixin<MovimientoCab, MovimientoCabId>;
  addMovimientoCab!: Sequelize.HasManyAddAssociationMixin<MovimientoCab, MovimientoCabId>;
  addMovimientoCabs!: Sequelize.HasManyAddAssociationsMixin<MovimientoCab, MovimientoCabId>;
  createMovimientoCab!: Sequelize.HasManyCreateAssociationMixin<MovimientoCab>;
  removeMovimientoCab!: Sequelize.HasManyRemoveAssociationMixin<MovimientoCab, MovimientoCabId>;
  removeMovimientoCabs!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoCab, MovimientoCabId>;
  hasMovimientoCab!: Sequelize.HasManyHasAssociationMixin<MovimientoCab, MovimientoCabId>;
  hasMovimientoCabs!: Sequelize.HasManyHasAssociationsMixin<MovimientoCab, MovimientoCabId>;
  countMovimientoCabs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Cliente {
    return sequelize.define('Cliente', {
    clienteId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cliente_id'
    },
    clienteRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'cliente_ruc'
    },
    clienteNombre1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_nombre1'
    },
    clienteNombre2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_nombre2'
    },
    clienteApellido1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_apellido1'
    },
    clienteApellido2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_apellido2'
    },
    clienteEmail: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'cliente_email'
    },
    clienteTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cliente_telefono'
    },
    clienteDireccion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cliente_direccion'
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
    tableName: 'cliente',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "cliente_pkey",
        unique: true,
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  }) as typeof Cliente;
  }
}
