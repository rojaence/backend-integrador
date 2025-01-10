import { CodesHttpEnum } from '../../enums/codesHttpEnums'
import { TCreateUserDTO, TPutUserData } from '../../interfaces/User.interface'
import { UserCreateModel } from '../../models/User'
import { HttpResponse } from '../../utils/httpResponse'
import UserRepository from './repository'

export class UserService {
  private readonly _userRepository: UserRepository

  constructor() {
    this._userRepository = new UserRepository()
  }

  async getUsers() {
    let users = await this._userRepository.GetUsers()
    return HttpResponse.response(CodesHttpEnum.ok, users)
  }

  async createUser(data: UserCreateModel) {
    const existingUser = await this._userRepository.FindUserByUsername(data.username)
    if (existingUser) {
      return HttpResponse.response(CodesHttpEnum.badRequest, 'Error al crear usuario', 'El usuario ya existe')
    }

    const existingEmail = await this._userRepository.FindUserByEmail(data.email)
    if (existingEmail) {
      return HttpResponse.response(
        CodesHttpEnum.badRequest,
        'Error al crear usuario',
        'Ya existe un usuario con el email proporcionado'
      )
    }

    const newUser = await this._userRepository.CreateUser(data)
    return HttpResponse.response(CodesHttpEnum.created, newUser, 'Usuario creado con éxito')
  }

  async getById(id: number) {
    const existingUser = await this._userRepository.GetById(id)
    if (!existingUser) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Usuario no encontrado')
    }
    return HttpResponse.response(CodesHttpEnum.ok, existingUser)
  }

  async deleteUser(id: number) {
    const existingUser = await this._userRepository.GetById(id)
    if (!existingUser) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Usuario no encontrado')
    }
    await this._userRepository.DeleteUser(id)
    return HttpResponse.response(CodesHttpEnum.ok, null, 'Usuario eliminado con éxito')
  }

  async putUser(id: number, data: TPutUserData) {
    const existingUser = await this._userRepository.GetById(id)
    const existingUsername = await this._userRepository.FindUserByUsername(data.username)
    if (!existingUser) {
      return HttpResponse.response(CodesHttpEnum.notFound, null, 'Usuario no encontrado')
    }
    if (existingUsername && existingUsername.username === data.username && id !== existingUsername.id) {
      return HttpResponse.response(CodesHttpEnum.badRequest, null, 'El nombre de usuario ya existe')
    }

    const existingEmail = await this._userRepository.FindUserByEmail(data.email)
    if (existingEmail && existingEmail.email === data.email && id !== existingEmail.id) {
      return HttpResponse.response(CodesHttpEnum.badRequest, null, 'El email proporcionado ya se encuentra registrado')
    }

    const updatedUser = await this._userRepository.PutUser(id, data)
    return HttpResponse.response(CodesHttpEnum.ok, updatedUser, 'Usuario actualizado con éxito')
  }
}
