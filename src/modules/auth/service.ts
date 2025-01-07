import { CodesHttpEnum } from "../../enums/codesHttpEnums";
import ValidationException from "../../exceptions/ValidationException";
import { HttpResponse } from "../../utils/httpResponse";
import AuthRepository from "./repository";

export class AuthService {
  private readonly _authRepository: AuthRepository
  constructor() {
    this._authRepository = new AuthRepository()
  }
  async registerService(username: string, password: string) {
    try {
      const existingUser = await this._authRepository.findByUserName(username)
      if (existingUser) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error en autenticación', "El usuario ya existe")
      }
      const newUser = await this._authRepository.createUser({ username, password })
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
      if (error instanceof ValidationException) {
        return HttpResponse.response(CodesHttpEnum.badRequest, 'Error de validación', error.message)
      }
      throw new Error("Error en autenticación")
    }
  }
}