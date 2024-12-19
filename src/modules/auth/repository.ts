import { IUser } from "../../interfaces/Auth.interface";

const users: IUser[] = []

export default class AuthRepository {
  async createUser(user: IUser): Promise<IUser> {
    users.push(user)
    return user
  }

  async findByUserName(username: string) {
    return users.find(u => u.username.toLocaleLowerCase() === username.toLocaleLowerCase())
  }

}