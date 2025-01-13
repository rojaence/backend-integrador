import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';
import type { PuntoEmisionSri, PuntoEmisionSriId } from './PuntoEmisionSri';
import type { Sucursal, SucursalId } from './Sucursal';

export interface PuntoVentaAttributes {
  puntovtaId: number;
  puntoEmisionId?: number;
  puntovtaNombre?: string;
  sucursalId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type PuntoVentaPk = "puntovtaId";
export type PuntoVentaId = PuntoVenta[PuntoVentaPk];
export type PuntoVentaOptionalAttributes = "puntovtaId" | "puntoEmisionId" | "puntovtaNombre" | "sucursalId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type PuntoVentaCreationAttributes = Optional<PuntoVentaAttributes, PuntoVentaOptionalAttributes>;

export class PuntoVenta extends Model<PuntoVentaAttributes, PuntoVentaCreationAttributes> implements PuntoVentaAttributes {
  puntovtaId!: number;
  puntoEmisionId?: number;
  puntovtaNombre?: string;
  sucursalId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // PuntoVenta belongsTo PuntoEmisionSri via puntoEmisionId
  puntoEmision!: PuntoEmisionSri;
  getPuntoEmision!: Sequelize.BelongsToGetAssociationMixin<PuntoEmisionSri>;
  setPuntoEmision!: Sequelize.BelongsToSetAssociationMixin<PuntoEmisionSri, PuntoEmisionSriId>;
  createPuntoEmision!: Sequelize.BelongsToCreateAssociationMixin<PuntoEmisionSri>;
  // PuntoVenta hasMany MovimientoCab via puntovtaId
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
  // PuntoVenta belongsTo Sucursal via sucursalId
  sucursal!: Sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<Sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<Sucursal, SucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<Sucursal>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PuntoVenta {
    return sequelize.define('PuntoVenta', {
    puntovtaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'puntovta_id'
    },
    puntoEmisionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'punto_emision_sri',
        key: 'punto_emision_id'
      },
      field: 'punto_emision_id'
    },
    puntovtaNombre: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'puntovta_nombre'
    },
    sucursalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sucursal',
        key: 'sucursal_id'
      },
      field: 'sucursal_id'
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
    tableName: 'punto_venta',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "punto_venta_pkey",
        unique: true,
        fields: [
          { name: "puntovta_id" },
        ]
      },
    ]
  }) as typeof PuntoVenta;
  }
}
