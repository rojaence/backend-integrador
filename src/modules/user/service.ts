import { CodesHttpEnum } from "../../enums/codesHttpEnums"
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
}