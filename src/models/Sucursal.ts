import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';
import type { PuntoEmisionSri, PuntoEmisionSriId } from './PuntoEmisionSri';
import type { PuntoVenta, PuntoVentaId } from './PuntoVenta';

export interface SucursalAttributes {
  sucursalId: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  empresaId?: number;
  codEstablecimientoSri?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type SucursalPk = "sucursalId";
export type SucursalId = Sucursal[SucursalPk];
export type SucursalOptionalAttributes = "sucursalId" | "sucursalRuc" | "sucursalNombre" | "sucursalDireccion" | "sucursalTelefono" | "estado" | "empresaId" | "codEstablecimientoSri" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type SucursalCreationAttributes = Optional<SucursalAttributes, SucursalOptionalAttributes>;

export class Sucursal extends Model<SucursalAttributes, SucursalCreationAttributes> implements SucursalAttributes {
  sucursalId!: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  empresaId?: number;
  codEstablecimientoSri?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Sucursal hasMany MovimientoCab via sucursalId
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
  // Sucursal hasMany PuntoEmisionSri via sucursalId
  puntoEmisionSris!: PuntoEmisionSri[];
  getPuntoEmisionSris!: Sequelize.HasManyGetAssociationsMixin<PuntoEmisionSri>;
  setPuntoEmisionSris!: Sequelize.HasManySetAssociationsMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  addPuntoEmisionSri!: Sequelize.HasManyAddAssociationMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  addPuntoEmisionSris!: Sequelize.HasManyAddAssociationsMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  createPuntoEmisionSri!: Sequelize.HasManyCreateAssociationMixin<PuntoEmisionSri>;
  removePuntoEmisionSri!: Sequelize.HasManyRemoveAssociationMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  removePuntoEmisionSris!: Sequelize.HasManyRemoveAssociationsMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  hasPuntoEmisionSri!: Sequelize.HasManyHasAssociationMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  hasPuntoEmisionSris!: Sequelize.HasManyHasAssociationsMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  countPuntoEmisionSris!: Sequelize.HasManyCountAssociationsMixin;
  // Sucursal hasMany PuntoVenta via sucursalId
  puntoVenta!: PuntoVenta[];
  getPuntoVenta!: Sequelize.HasManyGetAssociationsMixin<PuntoVenta>;
  setPuntoVenta!: Sequelize.HasManySetAssociationsMixin<PuntoVenta, PuntoVentaId>;
  addPuntoVentum!: Sequelize.HasManyAddAssociationMixin<PuntoVenta, PuntoVentaId>;
  addPuntoVenta!: Sequelize.HasManyAddAssociationsMixin<PuntoVenta, PuntoVentaId>;
  createPuntoVentum!: Sequelize.HasManyCreateAssociationMixin<PuntoVenta>;
  removePuntoVentum!: Sequelize.HasManyRemoveAssociationMixin<PuntoVenta, PuntoVentaId>;
  removePuntoVenta!: Sequelize.HasManyRemoveAssociationsMixin<PuntoVenta, PuntoVentaId>;
  hasPuntoVentum!: Sequelize.HasManyHasAssociationMixin<PuntoVenta, PuntoVentaId>;
  hasPuntoVenta!: Sequelize.HasManyHasAssociationsMixin<PuntoVenta, PuntoVentaId>;
  countPuntoVenta!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Sucursal {
    return sequelize.define('Sucursal', {
    sucursalId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'sucursal_id'
    },
    sucursalRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'sucursal_ruc'
    },
    sucursalNombre: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_nombre'
    },
    sucursalDireccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_direccion'
    },
    sucursalTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sucursal_telefono'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'empresa_id'
    },
    codEstablecimientoSri: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      field: 'cod_establecimiento_sri'
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
    tableName: 'sucursal',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "sucursal_pkey",
        unique: true,
        fields: [
          { name: "sucursal_id" },
        ]
      },
    ]
  }) as typeof Sucursal;
  }
}
