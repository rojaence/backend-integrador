import type { Sequelize } from "sequelize";
import { Category as _Category } from "./Category";
import type { CategoryAttributes, CategoryCreationAttributes } from "./Category";
import { Ciudad as _Ciudad } from "./Ciudad";
import type { CiudadAttributes, CiudadCreationAttributes } from "./Ciudad";
import { Cliente as _Cliente } from "./Cliente";
import type { ClienteAttributes, ClienteCreationAttributes } from "./Cliente";
import { Empresa as _Empresa } from "./Empresa";
import type { EmpresaAttributes, EmpresaCreationAttributes } from "./Empresa";
import { FormaPago as _FormaPago } from "./FormaPago";
import type { FormaPagoAttributes, FormaPagoCreationAttributes } from "./FormaPago";
import { Impuesto as _Impuesto } from "./Impuesto";
import type { ImpuestoAttributes, ImpuestoCreationAttributes } from "./Impuesto";
import { Industria as _Industria } from "./Industria";
import type { IndustriaAttributes, IndustriaCreationAttributes } from "./Industria";
import { Marca as _Marca } from "./Marca";
import type { MarcaAttributes, MarcaCreationAttributes } from "./Marca";
import { Modulo as _Modulo } from "./Modulo";
import type { ModuloAttributes, ModuloCreationAttributes } from "./Modulo";
import { MovimientoCab as _MovimientoCab } from "./MovimientoCab";
import type { MovimientoCabAttributes, MovimientoCabCreationAttributes } from "./MovimientoCab";
import { MovimientoDetPagos as _MovimientoDetPagos } from "./MovimientoDetPagos";
import type { MovimientoDetPagosAttributes, MovimientoDetPagosCreationAttributes } from "./MovimientoDetPagos";
import { MovimientoDetProducto as _MovimientoDetProducto } from "./MovimientoDetProducto";
import type { MovimientoDetProductoAttributes, MovimientoDetProductoCreationAttributes } from "./MovimientoDetProducto";
import { Opcion as _Opcion } from "./Opcion";
import type { OpcionAttributes, OpcionCreationAttributes } from "./Opcion";
import { Pais as _Pais } from "./Pais";
import type { PaisAttributes, PaisCreationAttributes } from "./Pais";
import { Product as _Product } from "./Product";
import type { ProductAttributes, ProductCreationAttributes } from "./Product";
import { Proveedor as _Proveedor } from "./Proveedor";
import type { ProveedorAttributes, ProveedorCreationAttributes } from "./Proveedor";
import { PuntoEmisionSri as _PuntoEmisionSri } from "./PuntoEmisionSri";
import type { PuntoEmisionSriAttributes, PuntoEmisionSriCreationAttributes } from "./PuntoEmisionSri";
import { PuntoVenta as _PuntoVenta } from "./PuntoVenta";
import type { PuntoVentaAttributes, PuntoVentaCreationAttributes } from "./PuntoVenta";
import { Rol as _Rol } from "./Rol";
import type { RolAttributes, RolCreationAttributes } from "./Rol";
import { Stock as _Stock } from "./Stock";
import type { StockAttributes, StockCreationAttributes } from "./Stock";
import { Sucursal as _Sucursal } from "./Sucursal";
import type { SucursalAttributes, SucursalCreationAttributes } from "./Sucursal";
import { TarjetaCredito as _TarjetaCredito } from "./TarjetaCredito";
import type { TarjetaCreditoAttributes, TarjetaCreditoCreationAttributes } from "./TarjetaCredito";
import { TipoMovimiento as _TipoMovimiento } from "./TipoMovimiento";
import type { TipoMovimientoAttributes, TipoMovimientoCreationAttributes } from "./TipoMovimiento";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";
import { UsuarioPermiso as _UsuarioPermiso } from "./UsuarioPermiso";
import type { UsuarioPermisoAttributes, UsuarioPermisoCreationAttributes } from "./UsuarioPermiso";
import { UsuarioRol as _UsuarioRol } from "./UsuarioRol";
import type { UsuarioRolAttributes, UsuarioRolCreationAttributes } from "./UsuarioRol";

export {
  _Category as Category,
  _Ciudad as Ciudad,
  _Cliente as Cliente,
  _Empresa as Empresa,
  _FormaPago as FormaPago,
  _Impuesto as Impuesto,
  _Industria as Industria,
  _Marca as Marca,
  _Modulo as Modulo,
  _MovimientoCab as MovimientoCab,
  _MovimientoDetPagos as MovimientoDetPagos,
  _MovimientoDetProducto as MovimientoDetProducto,
  _Opcion as Opcion,
  _Pais as Pais,
  _Product as Product,
  _Proveedor as Proveedor,
  _PuntoEmisionSri as PuntoEmisionSri,
  _PuntoVenta as PuntoVenta,
  _Rol as Rol,
  _Stock as Stock,
  _Sucursal as Sucursal,
  _TarjetaCredito as TarjetaCredito,
  _TipoMovimiento as TipoMovimiento,
  _Usuario as Usuario,
  _UsuarioPermiso as UsuarioPermiso,
  _UsuarioRol as UsuarioRol,
};

export type {
  CategoryAttributes as CategoryAttributes,
  CategoryCreationAttributes as CategoryCreationAttributes,
  CiudadAttributes,
  CiudadCreationAttributes,
  ClienteAttributes,
  ClienteCreationAttributes,
  EmpresaAttributes,
  EmpresaCreationAttributes,
  FormaPagoAttributes,
  FormaPagoCreationAttributes,
  ImpuestoAttributes,
  ImpuestoCreationAttributes,
  IndustriaAttributes,
  IndustriaCreationAttributes,
  MarcaAttributes,
  MarcaCreationAttributes,
  ModuloAttributes,
  ModuloCreationAttributes,
  MovimientoCabAttributes,
  MovimientoCabCreationAttributes,
  MovimientoDetPagosAttributes,
  MovimientoDetPagosCreationAttributes,
  MovimientoDetProductoAttributes,
  MovimientoDetProductoCreationAttributes,
  OpcionAttributes,
  OpcionCreationAttributes,
  PaisAttributes,
  PaisCreationAttributes,
  ProductAttributes as ProductAttributes,
  ProductCreationAttributes as ProductCreationAttributes,
  ProveedorAttributes,
  ProveedorCreationAttributes,
  PuntoEmisionSriAttributes,
  PuntoEmisionSriCreationAttributes,
  PuntoVentaAttributes,
  PuntoVentaCreationAttributes,
  RolAttributes,
  RolCreationAttributes,
  StockAttributes,
  StockCreationAttributes,
  SucursalAttributes,
  SucursalCreationAttributes,
  TarjetaCreditoAttributes,
  TarjetaCreditoCreationAttributes,
  TipoMovimientoAttributes,
  TipoMovimientoCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
  UsuarioPermisoAttributes,
  UsuarioPermisoCreationAttributes,
  UsuarioRolAttributes,
  UsuarioRolCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  // const Pais = _Pais.initModel(sequelize);
  // const Ciudad = _Ciudad.initModel(sequelize);
  // const Industria = _Industria.initModel(sequelize);
  // const Empresa = _Empresa.initModel(sequelize);
  // const Sucursal = _Sucursal.initModel(sequelize);
  // const Marca = _Marca.initModel(sequelize);
  const Category = _Category.initModel(sequelize);
  // const Proveedor = _Proveedor.initModel(sequelize);
  const Product = _Product.initModel(sequelize);
  // const Stock = _Stock.initModel(sequelize);
  // const Cliente = _Cliente.initModel(sequelize);
  // const Rol = _Rol.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);
  // const UsuarioRol = _UsuarioRol.initModel(sequelize);
  // const Modulo = _Modulo.initModel(sequelize);
  // const Opcion = _Opcion.initModel(sequelize);
  // const UsuarioPermiso = _UsuarioPermiso.initModel(sequelize);
  // const Impuesto = _Impuesto.initModel(sequelize);
  // const TarjetaCredito = _TarjetaCredito.initModel(sequelize);
  // const FormaPago = _FormaPago.initModel(sequelize);
  // const TipoMovimiento = _TipoMovimiento.initModel(sequelize);
  // const PuntoEmisionSri = _PuntoEmisionSri.initModel(sequelize);
  // const PuntoVenta = _PuntoVenta.initModel(sequelize);
  // const MovimientoCab = _MovimientoCab.initModel(sequelize);
  // const MovimientoDetProducto = _MovimientoDetProducto.initModel(sequelize);
  // const MovimientoDetPagos = _MovimientoDetPagos.initModel(sequelize);

  Product.belongsTo(Category, { as: "category", foreignKey: "categoryId"});
  Category.hasMany(Product, { as: "products", foreignKey: "categoryId"});
  // Empresa.belongsTo(Ciudad, { as: "ciudad", foreignKey: "ciudadId"});
  // Ciudad.hasMany(Empresa, { as: "empresas", foreignKey: "ciudadId"});
  // MovimientoCab.belongsTo(Cliente, { as: "cliente", foreignKey: "clienteId"});
  // Cliente.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "clienteId"});
  // MovimientoCab.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  // Empresa.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "empresaId"});
  // PuntoEmisionSri.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  // Empresa.hasMany(PuntoEmisionSri, { as: "puntoEmisionSris", foreignKey: "empresaId"});
  // Stock.belongsTo(Empresa, { as: "empresa", foreignKey: "empresaId"});
  // Empresa.hasMany(Stock, { as: "stocks", foreignKey: "empresaId"});
  // MovimientoDetPagos.belongsTo(FormaPago, { as: "fpago", foreignKey: "fpagoId"});
  // FormaPago.hasMany(MovimientoDetPagos, { as: "movimientoDetPagos", foreignKey: "fpagoId"});
  // TarjetaCredito.belongsTo(Industria, { as: "industrium", foreignKey: "industriaId"});
  // Industria.hasMany(TarjetaCredito, { as: "tarjetaCreditos", foreignKey: "industriaId"});
  // Producto.belongsTo(Marca, { as: "marca", foreignKey: "marcaId"});
  // Marca.hasMany(Producto, { as: "productos", foreignKey: "marcaId"});
  // Opcion.belongsTo(Modulo, { as: "modulo", foreignKey: "moduloId"});
  // Modulo.hasMany(Opcion, { as: "opcions", foreignKey: "moduloId"});
  // MovimientoDetPagos.belongsTo(MovimientoCab, { as: "movicab", foreignKey: "movicabId"});
  // MovimientoCab.hasMany(MovimientoDetPagos, { as: "movimientoDetPagos", foreignKey: "movicabId"});
  // MovimientoDetProducto.belongsTo(MovimientoCab, { as: "movicab", foreignKey: "movicabId"});
  // MovimientoCab.hasMany(MovimientoDetProducto, { as: "movimientoDetProductos", foreignKey: "movicabId"});
  // UsuarioPermiso.belongsTo(Opcion, { as: "opcion", foreignKey: "opcionId"});
  // Opcion.hasMany(UsuarioPermiso, { as: "usuarioPermisos", foreignKey: "opcionId"});
  // Ciudad.belongsTo(Pais, { as: "pai", foreignKey: "paisId"});
  // Pais.hasMany(Ciudad, { as: "ciudads", foreignKey: "paisId"});
  // MovimientoDetProducto.belongsTo(Producto, { as: "producto", foreignKey: "productoId"});
  // Producto.hasMany(MovimientoDetProducto, { as: "movimientoDetProductos", foreignKey: "productoId"});
  // MovimientoCab.belongsTo(Proveedor, { as: "proveedor", foreignKey: "proveedorId"});
  // Proveedor.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "proveedorId"});
  // PuntoVenta.belongsTo(PuntoEmisionSri, { as: "puntoEmision", foreignKey: "puntoEmisionId"});
  // PuntoEmisionSri.hasMany(PuntoVenta, { as: "puntoVenta", foreignKey: "puntoEmisionId"});
  // MovimientoCab.belongsTo(PuntoVenta, { as: "puntovtum", foreignKey: "puntovtaId"});
  // PuntoVenta.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "puntovtaId"});
  // UsuarioRol.belongsTo(Rol, { as: "rol", foreignKey: "rolId"});
  // Rol.hasMany(UsuarioRol, { as: "usuarioRols", foreignKey: "rolId"});
  // MovimientoCab.belongsTo(Sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  // Sucursal.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "sucursalId"});
  // PuntoEmisionSri.belongsTo(Sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  // Sucursal.hasMany(PuntoEmisionSri, { as: "puntoEmisionSris", foreignKey: "sucursalId"});
  // PuntoVenta.belongsTo(Sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  // Sucursal.hasMany(PuntoVenta, { as: "puntoVenta", foreignKey: "sucursalId"});
  // MovimientoDetPagos.belongsTo(TarjetaCredito, { as: "tarjetacred", foreignKey: "tarjetacredId"});
  // TarjetaCredito.hasMany(MovimientoDetPagos, { as: "movimientoDetPagos", foreignKey: "tarjetacredId"});
  // MovimientoCab.belongsTo(TipoMovimiento, { as: "tipomov", foreignKey: "tipomovId"});
  // TipoMovimiento.hasMany(MovimientoCab, { as: "movimientoCabs", foreignKey: "tipomovId"});
  // UsuarioPermiso.belongsTo(Usuario, { as: "usu", foreignKey: "id"});
  // Usuario.hasMany(UsuarioPermiso, { as: "usuarioPermisos", foreignKey: "id"});
  // UsuarioRol.belongsTo(Usuario, { as: "usu", foreignKey: "id"});
  // Usuario.hasMany(UsuarioRol, { as: "usuarioRols", foreignKey: "id"});

  return {
    Category: Category,
    // Ciudad: Ciudad,
    // Cliente: Cliente,
    // Empresa: Empresa,
    // FormaPago: FormaPago,
    // Impuesto: Impuesto,
    // Industria: Industria,
    // Marca: Marca,
    // Modulo: Modulo,
    // MovimientoCab: MovimientoCab,
    // MovimientoDetPagos: MovimientoDetPagos,
    // MovimientoDetProducto: MovimientoDetProducto,
    // Opcion: Opcion,
    // Pais: Pais,
    Product: Product,
    // Proveedor: Proveedor,
    // PuntoEmisionSri: PuntoEmisionSri,
    // PuntoVenta: PuntoVenta,
    // Rol: Rol,
    // Stock: Stock,
    // Sucursal: Sucursal,
    // TarjetaCredito: TarjetaCredito,
    // TipoMovimiento: TipoMovimiento,
    Usuario: Usuario,
    // UsuarioPermiso: UsuarioPermiso,
    // UsuarioRol: UsuarioRol,
  };
}
