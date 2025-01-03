import { IUser } from "../../interfaces/Auth.interface";
import fs from 'fs/promises';
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from "../../environment/env";
import { dataUsersFilePath } from "../../constants";

/* const users: IUser[] = [] */
//const dataFilePath = path.join(__dirname, '../../../data/users.json');

export default class AuthRepository {

  
  async readUsers(): Promise<IUser[]> {
    try {
      const data = await fs.readFile(dataUsersFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async writeUsers(users: IUser[]): Promise<void> {
    await fs.writeFile(dataUsersFilePath, JSON.stringify(users, null, 2), 'utf-8');
  }

  async createUser(user: IUser): Promise<IUser> {
    const users = await this.readUsers();
    users.push(user);
    await this.writeUsers(users);
    return user
  }

  async findByUserName(username: string) {
    const users = await this.readUsers();
    return users.find(u => u.username.toLocaleLowerCase() === username.toLocaleLowerCase())
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