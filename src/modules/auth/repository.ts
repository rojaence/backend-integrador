import { IUser } from "../../interfaces/Auth.interface";
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from "../../environment/env";
import { ICreateUserDTO } from "../../interfaces/User.interface";
import UserJSONFileManager from "../../utils/userJSONDatabase";
import BcryptHash from "../../utils/bcryptHash";
import ValidationException from "../../exceptions/ValidationException";

export default class AuthRepository extends UserJSONFileManager {

  private bcryptHash;

  constructor() {
    super()
    this.bcryptHash = new BcryptHash()
  }

  async createUser(user: ICreateUserDTO): Promise<IUser> {
    const users = await this.readUsers();
    const newId = await this.getNewId()

    const passwordHash = await this.bcryptHash.genPasswordHash(user.password)

    const newUser = {
      id: newId,
      ...user,
      password: passwordHash,
    }
    users.push(newUser);
    await this.writeUsers(users);
    return newUser
  }

  async loginUser(username: string, password: string) {
    const userDB = await this.findByUserName(username)
    if (!userDB) {
      throw new ValidationException('El usuario no existe')
    }
    const passwordChecked = await this.bcryptHash.chechPasswordHash(password, userDB.password)

    if (!passwordChecked) {
      throw new ValidationException('Credenciales incorrectas')
    }

    const token = sign({ username: userDB.username }, JWT_SECRET)
    return {
      username: userDB.username,
      token
    }
  }
}