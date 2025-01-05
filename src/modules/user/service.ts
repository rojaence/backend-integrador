import { CodesHttpEnum } from "../../enums/codesHttpEnums"
import { ICreateUserDTO } from "../../interfaces/User.interface"
import { HttpResponse } from "../../utils/httpResponse"
import UserRepository from "./repository"

export class UserService {
  private readonly _userRepository: UserRepository

  constructor() {
    this._userRepository = new UserRepository()
  }

  async getUsers() {
     let users = await this._userRepository.getUsers()
     return HttpResponse.response(CodesHttpEnum.ok, users)
  }

  async createUser(data: ICreateUserDTO) {
    const existingUser = await this._userRepository.findByUserName(data.username)
    if (existingUser) {
      throw new Error("El usuario ya existe")
    }
    const newUser = await this._userRepository.createUser(data)
    return HttpResponse.response(CodesHttpEnum.created, newUser, "Usuario creado con éxito")
  }

  async getById(id: number) {
    const existingUser = await this._userRepository.getById(id)
    if (!existingUser) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, "Usuario no encontrado")
    }
    return HttpResponse.response(CodesHttpEnum.ok, existingUser)
  }

  async deleteUser(id: number) {
    const existingUser = await this._userRepository.getById(id)
    if (!existingUser)  {
      return HttpResponse.response(CodesHttpEnum.notFound, null, "Usuario no encontrado")
    }
    await this._userRepository.deleteUser(id)
    return HttpResponse.response(CodesHttpEnum.ok, null, "Usuario eliminado con éxito")
  }
}