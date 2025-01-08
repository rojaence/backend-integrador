import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import ApiException from "../../exceptions/ApiException";
import { TCreateUserDTO } from "../../interfaces/User.interface";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";

export class AuthService {
  private readonly _authRepository: AuthRepository
  constructor() {
    this._authRepository = new AuthRepository()
  }
  async registerService(userData: TCreateUserDTO) {
    try {
      const existingUser = await this._authRepository.findByUserName(userData.username)
      if (existingUser) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error en autenticación', "El usuario ya existe")
      }

      const existingEmail = await this._authRepository.findByEmail(userData.email)
      if (existingEmail) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error en autenticación', "Ya existe un usuario con el email proporcionado")
      }

      const newUser = await this._authRepository.createUser(userData)
      return HttpResponse.response(CodesHttpEnum.created, newUser, 'Usuario creado con éxito')
    } catch (error) {
      throw new Error("Error en autenticación")
    }
  }

  async loginService(username: string, password: string) {
    try {
      const response = await this._authRepository.loginUser(username, password)
      return HttpResponse.response(CodesHttpEnum.ok, response, 'Usuario logueado con éxito')
    } catch (error) {
      if (error instanceof ApiException) {
        return HttpResponse.response(error.statusCode, null, error.message)
      }
      throw new Error("Error en autenticación")
    }
  }
}