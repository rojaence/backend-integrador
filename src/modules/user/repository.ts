import UserJSONFileManager from '../../utils/userJSONDatabase';
import { IUser } from '../../interfaces/Auth.interface';

export default class UserRepository extends UserJSONFileManager {
  
  async getUsers(): Promise<IUser[]> {
    return await this.readUsers()
  }
}