import UserJSONFileManager from '../../utils/userJSONDatabase';
import { IUser } from '../../interfaces/Auth.interface';
import { TCreateUserDTO, TPutUserData } from '../../interfaces/User.interface';
import BcryptHash from '../../utils/bcryptHash';
import ApiException from '../../exceptions/ApiException';
import { CodesHttpEnum } from '../../enums/codesHttpEnums';
import { UsuarioCreationAttributes, UsuarioScopes } from '../../models/Usuario';
import { models } from '../../database/config/initDatabase';

export default class UserRepository extends UserJSONFileManager {

  constructor() {
    super()
  }
  
  async getUsers(): Promise<IUser[]> {
    return await this.readUsers()
  }

  async createUser(user: TCreateUserDTO): Promise<IUser> {
    const users = await this.readUsers();
    const newId = await this.getNewId()

    const passwordHash = await BcryptHash.genPasswordHash(user.password)

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
    const password = await BcryptHash.genPasswordHash(newData.password)
    const newUserData = {
      id,
      ...newData,
      password
    }
    users.splice(userIndex, 1, newUserData)
    await this.writeUsers(users)
    return newUserData
  }

  async CreateUser(payload: UsuarioCreationAttributes) {
    const user = await models.Usuario.create(payload)
    return {
      name: user.nombre,
      email: user.email,
      estado: user.estado,
      username: user.username,
      birthdate: user.birthdate
    }
  }

  async FindUserByEmail(email: string) {
      return models.Usuario.findOne({
          where: {
            email
          }
      })
  }

  async FindUserByUsername(username: string) {
    return models.Usuario.findOne({
        where: {
          username
        }
    })
  }

  async GetUsers() {
    return models.Usuario.scope(UsuarioScopes.GetUserProfile).findAll()
  }

  async GetById(id: number) {
    return models.Usuario.scope(UsuarioScopes.GetUserProfile).findOne({
      where: {
        id
      }
    })
  }

  async DeleteUser(id: number) {
    return models.Usuario.destroy({
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
    let hashPass = await BcryptHash.genPasswordHash(newData.password)
    user.set("password", hashPass)

    // Excluir password
    const { password, ...userData } = newData
    user.set(userData)
    await user.save()
    const updatedUser = await models.Usuario.scope(UsuarioScopes.GetUserProfile).findByPk(id)
    return updatedUser
  }
}