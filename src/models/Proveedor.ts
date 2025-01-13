import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';

export interface ProveedorAttributes {
  proveedorId: number;
  provRuc?: string;
  provNomComercial?: string;
  provRazon?: string;
  provDireccion?: string;
  provTelefono?: string;
  ciudadId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type ProveedorPk = "proveedorId";
export type ProveedorId = Proveedor[ProveedorPk];
export type ProveedorOptionalAttributes = "proveedorId" | "provRuc" | "provNomComercial" | "provRazon" | "provDireccion" | "provTelefono" | "ciudadId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type ProveedorCreationAttributes = Optional<ProveedorAttributes, ProveedorOptionalAttributes>;

export class Proveedor extends Model<ProveedorAttributes, ProveedorCreationAttributes> implements ProveedorAttributes {
  proveedorId!: number;
  provRuc?: string;
  provNomComercial?: string;
  provRazon?: string;
  provDireccion?: string;
  provTelefono?: string;
  ciudadId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Proveedor hasMany MovimientoCab via proveedorId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Proveedor {
    return sequelize.define('Proveedor', {
    proveedorId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'proveedor_id'
    },
    provRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'prov_ruc'
    },
    provNomComercial: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prov_nom_comercial'
    },
    provRazon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prov_razon'
    },
    provDireccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'prov_direccion'
    },
    provTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'prov_telefono'
    },
    ciudadId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ciudad_id'
    },
    estado: {
      type: DataTypes.STRING(255),
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
    tableName: 'proveedor',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "proveedor_pkey",
        unique: true,
        fields: [
          { name: "proveedor_id" },
        ]
      },
    ]
  }) as typeof Proveedor;
  }
}
