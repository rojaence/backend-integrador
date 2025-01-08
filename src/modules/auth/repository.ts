import { IUser } from "../../interfaces/Auth.interface";
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from "../../environment/env";
import { TCreateUserDTO } from "../../interfaces/User.interface";
import UserJSONFileManager from "../../utils/userJSONDatabase";
import BcryptHash from "../../utils/bcryptHash";
import ApiException from "../../exceptions/ApiException";
import { CodesHttpEnum } from "../../enums/codesHttpEnums";

export default class AuthRepository extends UserJSONFileManager {

  private bcryptHash;

  constructor() {
    super()
    this.bcryptHash = new BcryptHash()
  }

  async createUser(user: TCreateUserDTO): Promise<IUser> {
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
      throw new ApiException('El usuario no existe', CodesHttpEnum.notFound)
    }
    const passwordChecked = await this.bcryptHash.chechPasswordHash(password, userDB.password)

    if (!passwordChecked) {
      throw new ApiException('Credenciales incorrectas', CodesHttpEnum.badRequest)
    }

    const token = sign({ username: userDB.username }, JWT_SECRET)
    return {
      username: userDB.username,
      token
    }
  }
}