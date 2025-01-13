import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Empresa, EmpresaId } from './Empresa';
import type { PuntoVenta, PuntoVentaId } from './PuntoVenta';
import type { Sucursal, SucursalId } from './Sucursal';

export interface PuntoEmisionSriAttributes {
  puntoEmisionId: number;
  puntoEmision?: string;
  empresaId?: number;
  sucursalId?: number;
  codEstablecimientoSri?: string;
  ultSecuencia?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type PuntoEmisionSriPk = "puntoEmisionId";
export type PuntoEmisionSriId = PuntoEmisionSri[PuntoEmisionSriPk];
export type PuntoEmisionSriOptionalAttributes = "puntoEmisionId" | "puntoEmision" | "empresaId" | "sucursalId" | "codEstablecimientoSri" | "ultSecuencia" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type PuntoEmisionSriCreationAttributes = Optional<PuntoEmisionSriAttributes, PuntoEmisionSriOptionalAttributes>;

export class PuntoEmisionSri extends Model<PuntoEmisionSriAttributes, PuntoEmisionSriCreationAttributes> implements PuntoEmisionSriAttributes {
  puntoEmisionId!: number;
  puntoEmision?: string;
  empresaId?: number;
  sucursalId?: number;
  codEstablecimientoSri?: string;
  ultSecuencia?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // PuntoEmisionSri belongsTo Empresa via empresaId
  empresa!: Empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<Empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<Empresa, EmpresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<Empresa>;
  // PuntoEmisionSri hasMany PuntoVenta via puntoEmisionId
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
  // PuntoEmisionSri belongsTo Sucursal via sucursalId
  sucursal!: Sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<Sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<Sucursal, SucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<Sucursal>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PuntoEmisionSri {
    return sequelize.define('PuntoEmisionSri', {
    puntoEmisionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'punto_emision_id'
    },
    puntoEmision: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      field: 'punto_emision'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'empresa_id'
      },
      field: 'empresa_id'
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
    codEstablecimientoSri: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'cod_establecimiento_sri'
    },
    ultSecuencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ult_secuencia'
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
    tableName: 'punto_emision_sri',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "punto_emision_sri_pkey",
        unique: true,
        fields: [
          { name: "punto_emision_id" },
        ]
      },
    ]
  }) as typeof PuntoEmisionSri;
  }
}
