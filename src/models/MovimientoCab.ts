import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Cliente, ClienteId } from './Cliente';
import type { Empresa, EmpresaId } from './Empresa';
import type { MovimientoDetPagos, MovimientoDetPagosId } from './MovimientoDetPagos';
import type { MovimientoDetProducto, MovimientoDetProductoId } from './MovimientoDetProducto';
import type { Proveedor, ProveedorId } from './Proveedor';
import type { PuntoVenta, PuntoVentaId } from './PuntoVenta';
import type { Sucursal, SucursalId } from './Sucursal';
import type { TipoMovimiento, TipoMovimientoId } from './TipoMovimiento';

export interface MovimientoCabAttributes {
  movicabId: number;
  tipomovId?: number;
  tipomovIngEgr?: number;
  empresaId?: number;
  sucursalId?: number;
  secuenciaFactura?: string;
  autorizacionSri?: string;
  claveAcceso?: string;
  clienteId?: number;
  puntovtaId?: number;
  proveedorId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type MovimientoCabPk = "movicabId";
export type MovimientoCabId = MovimientoCab[MovimientoCabPk];
export type MovimientoCabOptionalAttributes = "movicabId" | "tipomovId" | "tipomovIngEgr" | "empresaId" | "sucursalId" | "secuenciaFactura" | "autorizacionSri" | "claveAcceso" | "clienteId" | "puntovtaId" | "proveedorId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type MovimientoCabCreationAttributes = Optional<MovimientoCabAttributes, MovimientoCabOptionalAttributes>;

export class MovimientoCab extends Model<MovimientoCabAttributes, MovimientoCabCreationAttributes> implements MovimientoCabAttributes {
  movicabId!: number;
  tipomovId?: number;
  tipomovIngEgr?: number;
  empresaId?: number;
  sucursalId?: number;
  secuenciaFactura?: string;
  autorizacionSri?: string;
  claveAcceso?: string;
  clienteId?: number;
  puntovtaId?: number;
  proveedorId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // MovimientoCab belongsTo Cliente via clienteId
  cliente!: Cliente;
  getCliente!: Sequelize.BelongsToGetAssociationMixin<Cliente>;
  setCliente!: Sequelize.BelongsToSetAssociationMixin<Cliente, ClienteId>;
  createCliente!: Sequelize.BelongsToCreateAssociationMixin<Cliente>;
  // MovimientoCab belongsTo Empresa via empresaId
  empresa!: Empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<Empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<Empresa, EmpresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<Empresa>;
  // MovimientoCab hasMany MovimientoDetPagos via movicabId
  movimientoDetPagos!: MovimientoDetPagos[];
  getMovimientoDetPagos!: Sequelize.HasManyGetAssociationsMixin<MovimientoDetPagos>;
  setMovimientoDetPagos!: Sequelize.HasManySetAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  addMovimientoDetPago!: Sequelize.HasManyAddAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  addMovimientoDetPagos!: Sequelize.HasManyAddAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  createMovimientoDetPago!: Sequelize.HasManyCreateAssociationMixin<MovimientoDetPagos>;
  removeMovimientoDetPago!: Sequelize.HasManyRemoveAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  removeMovimientoDetPagos!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  hasMovimientoDetPago!: Sequelize.HasManyHasAssociationMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  hasMovimientoDetPagos!: Sequelize.HasManyHasAssociationsMixin<MovimientoDetPagos, MovimientoDetPagosId>;
  countMovimientoDetPagos!: Sequelize.HasManyCountAssociationsMixin;
  // MovimientoCab hasMany MovimientoDetProducto via movicabId
  movimientoDetProductos!: MovimientoDetProducto[];
  getMovimientoDetProductos!: Sequelize.HasManyGetAssociationsMixin<MovimientoDetProducto>;
  setMovimientoDetProductos!: Sequelize.HasManySetAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  addMovimientoDetProducto!: Sequelize.HasManyAddAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  addMovimientoDetProductos!: Sequelize.HasManyAddAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  createMovimientoDetProducto!: Sequelize.HasManyCreateAssociationMixin<MovimientoDetProducto>;
  removeMovimientoDetProducto!: Sequelize.HasManyRemoveAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  removeMovimientoDetProductos!: Sequelize.HasManyRemoveAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  hasMovimientoDetProducto!: Sequelize.HasManyHasAssociationMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  hasMovimientoDetProductos!: Sequelize.HasManyHasAssociationsMixin<MovimientoDetProducto, MovimientoDetProductoId>;
  countMovimientoDetProductos!: Sequelize.HasManyCountAssociationsMixin;
  // MovimientoCab belongsTo Proveedor via proveedorId
  proveedor!: Proveedor;
  getProveedor!: Sequelize.BelongsToGetAssociationMixin<Proveedor>;
  setProveedor!: Sequelize.BelongsToSetAssociationMixin<Proveedor, ProveedorId>;
  createProveedor!: Sequelize.BelongsToCreateAssociationMixin<Proveedor>;
  // MovimientoCab belongsTo PuntoVenta via puntovtaId
  puntovtum!: PuntoVenta;
  getPuntovtum!: Sequelize.BelongsToGetAssociationMixin<PuntoVenta>;
  setPuntovtum!: Sequelize.BelongsToSetAssociationMixin<PuntoVenta, PuntoVentaId>;
  createPuntovtum!: Sequelize.BelongsToCreateAssociationMixin<PuntoVenta>;
  // MovimientoCab belongsTo Sucursal via sucursalId
  sucursal!: Sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<Sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<Sucursal, SucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<Sucursal>;
  // MovimientoCab belongsTo TipoMovimiento via tipomovId
  tipomov!: TipoMovimiento;
  getTipomov!: Sequelize.BelongsToGetAssociationMixin<TipoMovimiento>;
  setTipomov!: Sequelize.BelongsToSetAssociationMixin<TipoMovimiento, TipoMovimientoId>;
  createTipomov!: Sequelize.BelongsToCreateAssociationMixin<TipoMovimiento>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MovimientoCab {
    return sequelize.define('MovimientoCab', {
    movicabId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movicab_id'
    },
    tipomovId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_movimiento',
        key: 'tipomov_id'
      },
      field: 'tipomov_id'
    },
    tipomovIngEgr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tipomov_ing_egr'
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
    secuenciaFactura: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'secuencia_factura'
    },
    autorizacionSri: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'autorizacion_sri'
    },
    claveAcceso: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'clave_acceso'
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'cliente_id'
      },
      field: 'cliente_id'
    },
    puntovtaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'punto_venta',
        key: 'puntovta_id'
      },
      field: 'puntovta_id'
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'proveedor_id'
      },
      field: 'proveedor_id'
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
    tableName: 'movimiento_cab',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_cab_pkey",
        unique: true,
        fields: [
          { name: "movicab_id" },
        ]
      },
    ]
  }) as typeof MovimientoCab;
  }
}
