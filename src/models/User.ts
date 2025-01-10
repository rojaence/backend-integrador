import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";
import { IUser } from "../interfaces/Auth.interface";
import BcryptHash from "../utils/bcryptHash";

// export interface IUserModel extends IUser { 
//   birthdate: string
// }

interface IUserModel extends Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>>, IUser {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>
  birthdate: string
}

export type UserCreateModel = Optional<IUserModel, "id">

const bcryptHash = new BcryptHash()

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
      allowNull: false
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
  },
  {
    hooks: {
      beforeCreate: async (record: IUserModel, options) => {
        let hashPass = await bcryptHash.genPasswordHash(record.password)
        record.password = hashPass
      },
    },
    scopes: {
      deletePassword: {
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