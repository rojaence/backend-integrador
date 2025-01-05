import UserJSONFileManager from '../../utils/userJSONDatabase';
import { IUser } from '../../interfaces/Auth.interface';
import { ICreateUserDTO } from '../../interfaces/User.interface';

export default class UserRepository extends UserJSONFileManager {
  
  async getUsers(): Promise<IUser[]> {
    return await this.readUsers()
  }

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

  async getById(id: number): Promise<IUser | undefined> {
    const users = await this.readUsers();
    const user = users.find(u => u.id === id)
    return user
  }

  async deleteUser(id: number) {
    const users = await this.readUsers()
    const userIndex = users.findIndex(u => u.id === id)
    users.splice(userIndex, 1)
    await this.writeUsers(users)
  }
}