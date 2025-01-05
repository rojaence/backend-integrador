import { IUser } from "../../interfaces/Auth.interface";
import fs from 'fs/promises';
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from "../../environment/env";
import { dataUsersFilePath } from "../../constants";
import { ICreateUserDTO } from "../../interfaces/User.interface";
import UserJSONFileManager from "../../utils/userJSONDatabase";

/* const users: IUser[] = [] */
//const dataFilePath = path.join(__dirname, '../../../data/users.json');

export default class AuthRepository extends UserJSONFileManager {

  async createUser(user: ICreateUserDTO): Promise<IUser> {
    const users = await this.readUsers();
    const newId = await this.getNewId()
    const newUser = {
      id: newId,
      ...user
    }
    users.push(newUser);
    await this.writeUsers(users);
    return newUser
  }

  async loginUser(username: string, password: string) {
    const userDB = await this.findByUserName(username)
    if (!userDB) {
      throw new Error('El usuario no existe')
    }
    if (userDB.password !== password) {
      throw new Error('Credenciales incorrectas')
    }

    const token = sign({ username: userDB.username }, JWT_SECRET)
    return {
      username: userDB.username,
      token
    }
  }
}