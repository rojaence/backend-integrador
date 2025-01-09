import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import db from "../config/dbOrm";
import { IUser } from "../interfaces/Auth.interface";
import BcryptHash from "../utils/bcryptHash";

export interface IUserModel extends IUser { 
  birthdate: string
}

export type UserCreateModel = Optional<IUserModel, "id">

const bcryptHash = new BcryptHash()

// And with a functional approach defining a module looks like this
export const User: ModelDefined<
  IUserModel,
  UserCreateModel
> = db.define(
  'User',
  {
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
    }
  },
  {
    // tableName: 'users',
    hooks: {
      beforeCreate: async (record: Model<IUserModel, UserCreateModel>, options) => {
        let hashPass = await bcryptHash.genPasswordHash(record.dataValues.password)
        record.dataValues.password = hashPass
      }
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