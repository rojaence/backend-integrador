import { dataUsersFilePath } from "../constants";
import fs from 'fs/promises'
import { IUser } from "../interfaces/Auth.interface";

export default class UserJSONFileManager {
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

  async findByUserName(username: string) {
    const users = await this.readUsers();
    return users.find(u => u.username.toLocaleLowerCase() === username.toLocaleLowerCase())
  }
}