import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Ciudad, CiudadId } from './Ciudad';
import type { MovimientoCab, MovimientoCabId } from './MovimientoCab';
import type { PuntoEmisionSri, PuntoEmisionSriId } from './PuntoEmisionSri';
import type { Stock, StockId } from './Stock';

export interface EmpresaAttributes {
  empresaId: number;
  empresaRuc?: string;
  empresaNombre?: string;
  empresaRazon?: string;
  empresaDireccionMatriz?: string;
  empresaTelefonoMatriz?: string;
  ciudadId: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type EmpresaPk = "empresaId";
export type EmpresaId = Empresa[EmpresaPk];
export type EmpresaOptionalAttributes = "empresaId" | "empresaRuc" | "empresaNombre" | "empresaRazon" | "empresaDireccionMatriz" | "empresaTelefonoMatriz" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type EmpresaCreationAttributes = Optional<EmpresaAttributes, EmpresaOptionalAttributes>;

export class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> implements EmpresaAttributes {
  empresaId!: number;
  empresaRuc?: string;
  empresaNombre?: string;
  empresaRazon?: string;
  empresaDireccionMatriz?: string;
  empresaTelefonoMatriz?: string;
  ciudadId!: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // Empresa belongsTo Ciudad via ciudadId
  ciudad!: Ciudad;
  getCiudad!: Sequelize.BelongsToGetAssociationMixin<Ciudad>;
  setCiudad!: Sequelize.BelongsToSetAssociationMixin<Ciudad, CiudadId>;
  createCiudad!: Sequelize.BelongsToCreateAssociationMixin<Ciudad>;
  // Empresa hasMany MovimientoCab via empresaId
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
  // Empresa hasMany PuntoEmisionSri via empresaId
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
  // Empresa hasMany Stock via empresaId
  stocks!: Stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<Stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<Stock, StockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<Stock, StockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<Stock, StockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<Stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<Stock, StockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<Stock, StockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<Stock, StockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<Stock, StockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Empresa {
    return sequelize.define('Empresa', {
    empresaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'empresa_id'
    },
    empresaRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'empresa_ruc'
    },
    empresaNombre: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_nombre'
    },
    empresaRazon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_razon'
    },
    empresaDireccionMatriz: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_direccion_matriz'
    },
    empresaTelefonoMatriz: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'empresa_telefono_matriz'
    },
    ciudadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ciudad',
        key: 'ciudad_id'
      },
      field: 'ciudad_id'
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
    tableName: 'empresa',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "empresa_pkey",
        unique: true,
        fields: [
          { name: "empresa_id" },
        ]
      },
    ]
  }) as typeof Empresa;
  }
}
