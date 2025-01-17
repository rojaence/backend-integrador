import { CodesHttpEnum } from "../../enums/codesHttpEnums"
import { HttpResponse } from "../../utils/httpResponse"
import { IUser } from "./interfaces"
import JsonplaceholderRepository from "./repository"

export class JsonplaceholderService {
  private readonly _jsonplaceholderRepository: JsonplaceholderRepository

  constructor() {
    this._jsonplaceholderRepository = new JsonplaceholderRepository()
  }

  async GetUsers(fetch: boolean) {
    let users: IUser[]
    if (fetch) {
      users = await this._jsonplaceholderRepository.GetFetchUsers()
    } else {
      users = await this._jsonplaceholderRepository.GetAxiosUsers()
    }
    return HttpResponse.response(CodesHttpEnum.ok, users)
  }
}