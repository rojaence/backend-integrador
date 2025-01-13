import { CreateOptions, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelDefined, Optional, Sequelize } from "sequelize";
import db from "../database/config/dbOrm";
import { IUser } from "../interfaces/Auth.interface";
import BcryptHash from "../utils/bcryptHash";

// export interface IUserModel extends IUser { 
//   birthdate: string
// }

interface IUserModel extends Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>>, IUser {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>
  birthdate: string
  nombre: string
  estado?: number
}

export type UserCreateModel = Optional<IUserModel, "id">

/* 
  Esta forma de definir el modelo permite el typechecking de las propiedades 
  accediendo directamente a ellas desde una instancia de este modelo
  y evitar typos
  
  por ejemplo: user1.email en lugar de user1.get('email')
*/

export const User = db.define<IUserModel>('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: async (record: IUserModel) => {
        let hashPass = await BcryptHash.genPasswordHash(record.password)
        record.password = hashPass
      },
    },
    scopes: {
      deletePassword: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }    
      },
      getUserProfile: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }    
      }
    }
  },
);

// export const User: ModelDefined<
//   IUserModel,
//   UserCreateModel
// > = db.define(
//   'User',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     birthdate: {
//       type: DataTypes.DATEONLY,
//       allowNull: false
//     }
//   },
//   {
//     hooks: {
//       beforeCreate: async (record: Model<IUserModel, UserCreateModel>, options) => {
//         let hashPass = await bcryptHash.genPasswordHash(record.dataValues.password)
//         record.dataValues.password = hashPass
//       },
//     },
//     scopes: {
//       deletePassword: {
//         attributes: {
//           exclude: ["password", "createdAt", "updatedAt"]
//         }    
//       }
//     }
//   },
// );