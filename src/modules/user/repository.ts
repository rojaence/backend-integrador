import UserJSONFileManager from '../../utils/userJSONDatabase';
import { IUser } from '../../interfaces/Auth.interface';
import { TCreateUserDTO, TPutUserData } from '../../interfaces/User.interface';
import BcryptHash from '../../utils/bcryptHash';
import { User, UserCreateModel } from '../../models/User';
import ApiException from '../../exceptions/ApiException';
import { CodesHttpEnum } from '../../enums/codesHttpEnums';

export default class UserRepository extends UserJSONFileManager {
  
  private bcryptHash;

  constructor() {
    super()
    this.bcryptHash = new BcryptHash()
  }
  
  async getUsers(): Promise<IUser[]> {
    return await this.readUsers()
  }

  async createUser(user: TCreateUserDTO): Promise<IUser> {
    const users = await this.readUsers();
    const newId = await this.getNewId()

    const passwordHash = await this.bcryptHash.genPasswordHash(user.password)

    const newUser = {
      id: newId,
      ...user,
      password: passwordHash
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

  async putUser(id: number, newData: TPutUserData) {
    const users = await this.readUsers()
    const userIndex = users.findIndex(u => u.id === id)
    const password = await this.bcryptHash.genPasswordHash(newData.password)
    const newUserData = {
      id,
      ...newData,
      password
    }
    users.splice(userIndex, 1, newUserData)
    await this.writeUsers(users)
    return newUserData
  }

  async CreateUser(payload: UserCreateModel){
    return User.create({
        email: payload.email,
        password: payload.password,
        username: payload.username,
        birthdate: payload.birthdate,
        nombre: payload.nombre,
        estado: payload.estado
    })
  }

  async FindUserByEmail(email: string) {
      return User.findOne({
          where: {
            email
          }
      })
  }

  async FindUserByUsername(username: string) {
    return User.findOne({
        where: {
          username
        }
    })
  }

  async GetUsers() {
    return User.findAll()
  }

  async GetById(id: number) {
    return User.findOne({
      where: {
        id
      }
    })
  }

  async DeleteUser(id: number) {
    return User.destroy({
      where: {
        id
      }
    })
  }

  async PutUser(id: number, newData: TPutUserData) {
    const user = await this.GetById(id)
    if (!user) {
      throw new ApiException("No se encontró un usuario con el id proporcionado", CodesHttpEnum.notFound)
    }
    let hashPass = await this.bcryptHash.genPasswordHash(newData.password)
    user.set("password", hashPass)

    // Excluir password
    const { password, ...userData } = newData
    user.set(userData)
    return user.save()
  }
}