import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import ApiException from "../../exceptions/ApiException";
import { UserCreateModel } from "../../models/User";
import { UsuarioCreationAttributes }  from "../../models/init-models"
import { HttpResponse } from "../../utils/httpResponse";
import UserRepository from "../user/repository";
import AuthRepository from "./repository";

export class AuthService {
  private readonly _authRepository: AuthRepository
  private readonly _userRepository: UserRepository

  constructor() {
    this._authRepository = new AuthRepository()
    this._userRepository = new UserRepository()
  }
  async registerService(userData: UsuarioCreationAttributes) {
    try {
      const existingUser = await this._userRepository.FindUserByUsername(userData.username)
      if (existingUser) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error en autenticación', "El usuario ya existe")
      }

      const existingEmail = await this._userRepository.FindUserByEmail(userData.email)
      if (existingEmail) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error en autenticación', "Ya existe un usuario con el email proporcionado")
      }

      const newUser = await this._userRepository.CreateUser(userData)
      return HttpResponse.response(CodesHttpEnum.created, newUser, 'Usuario creado con éxito')
    } catch (error) {
      if (error instanceof ApiException) {
        return HttpResponse.response(error.statusCode, "Error en autenticación", error.message)
      }
      throw new Error("Error en autenticación")
    }
  }

  async loginService(username: string, password: string) {
    try {
      const response = await this._authRepository.LoginUser(username, password)
      return HttpResponse.response(CodesHttpEnum.ok, response, 'Usuario logueado con éxito')
    } catch (error) {
      if (error instanceof ApiException) {
        return HttpResponse.response(error.statusCode, null, error.message)
      }
      console.log(error)
      throw new Error("Error en autenticación")
    }
  }
}